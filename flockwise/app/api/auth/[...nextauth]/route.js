// File written by Arif Nizami

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Employee from '@models/employee';
import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        // store the user id from MongoDB to session
        const sessionUser = await User.findOne({ email: session.user.email }).populate('employee');
        if(sessionUser) {
          session.user.id = sessionUser._id.toString();
          session.user.employee = sessionUser.employee;
        }
      }
       catch (error) {
        console.error("Error fetching user session data: ", error.message);
      }
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          const newUser = await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
          await createEmployeeForUser(newUser, profile); // create a corresponding employee for the user as well
        }
        else {
          const existingUser = await User.findOne({ email: profile.email }).populate('employee');

          // ensure user has an employee object, create one if not
          if (!existingUser.employee) {
            const newEmployee = createEmployeeForUser(userExists, profile)
          }
        }
        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

const createEmployeeForUser = async (user, profile) => {
  const newEmployee = new Employee({
    employeeID: generateUniqueEmployeeID(), // need to implement, just need stored max id value and increment
    name: profile.name,
    assignedTasks: [], // an employee wont have any tasks assigned initially
    workSchedule: createDefaultWorkSchedule(), // need to implement
    benefitsManager: createDefaultBenefitsManager(), // need to implement
    accessLevel: 1,
  });
  await newEmployee.save();

  user.employee = newEmployee._id;
  await user.save();
};

export { handler as GET, handler as POST }