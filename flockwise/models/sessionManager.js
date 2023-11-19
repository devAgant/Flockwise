import { Session } from 'next-auth/react';

class SessionManager {
  static instance = new SessionManager(); // Initialize instance here

  session = null;

  setSession(session) {
    this.session = session;
  }

  getSession() {
    return this.session;
  }
}

export default SessionManager.instance;