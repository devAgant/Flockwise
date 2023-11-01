
import Feed from '@components/Feed';

const Home = () => {
  return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Flockwise
                <br className="max-md:hidden" />
                <span> </span>
            </h1>
            <Feed />
        </section>
  )
}

export default Home