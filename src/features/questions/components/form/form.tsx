import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import questionsApi from '../../api'
import { FormState } from '../../types'
import Question from '../question'
import { MAX_STEP, QUESTIONS } from '../../constants'

const Form = () => {
  const [step, setStep] = useState(0)
  const [formState, setFormState] = useState<FormState>({})
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted)
    return (
      <p className="text-xl">
        Thank you for submitting! We will get in touch shortly with your
        results.
      </p>
    )

  const isCurrentQuestionAnswered = () => {
    return !(step > 0 && !formState[`q${step}` as keyof FormState])
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleBackClick = () => {
    setError('')
    setStep((currentStep) => currentStep - 1)
  }

  const handleNextClick = () => {
    if (isCurrentQuestionAnswered()) {
      setError('')
      if (step === MAX_STEP) {
        setSubmitted(true)
        questionsApi.post(formState)
        return
      }
      setStep((currentStep) => currentStep + 1)
    } else {
      setError('Please answer question')
    }
  }

  return (
    <form>
      <section className="relative h-48">
        {QUESTIONS.map((question) => (
          <Question
            key={question.id}
            question={question}
            handleChange={handleChange}
            show={String(step) === question.id}
          />
        ))}
      </section>
      <section className="flex gap-8 mt-4">
        {step > 1 && (
          <button
            className="px-4 py-2 bg-orange-400 text-white rounded-lg"
            type="button"
            onClick={handleBackClick}
          >
            Back
          </button>
        )}
        {
          <button
            className="px-4 py-2 bg-orange-400 text-white rounded-lg"
            type="button"
            onClick={handleNextClick}
          >
            {step === 0 ? 'Start' : step === MAX_STEP ? 'Submit' : 'Next'}
          </button>
        }
      </section>
      <section className="mt-4">
        <p className="text-red-600">{error}</p>
      </section>
    </form>
  )
}

export default Form
