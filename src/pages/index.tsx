import Questions from '@/features/questions/components/questions'
import Page from '@/features/shared/components/page'

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold">Welcome to MedExpress!</h1>
        <p className="text-xl">
          Due to an outbreak of Genovian Pear allergic reactions, we are
          currently offering discounted rates on Genovian Pear allergy medicine.
        </p>
        <p className="text-xl">
          Please press start to begin a questionnaire which will test your
          eligibility for the discounted rate.
        </p>
        <Questions />
      </div>
    </Page>
  )
}

export default Home
