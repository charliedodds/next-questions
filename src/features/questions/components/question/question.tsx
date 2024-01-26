import { ChangeEventHandler, FC } from 'react'
import { Question } from '../../types'
import clsx from 'clsx'

interface Props {
  question: Question
  show: boolean
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const Question: FC<Props> = ({ question, show, handleChange }) => {
  const { id, label, name } = question
  return (
    <section
      className={clsx(
        'absolute top-0 left-0',
        show ? 'opacity-100 z-10' : 'opacity-0'
      )}
    >
      <fieldset className="flex flex-col gap-1">
        <legend className="text-lg font-semibold">{label}</legend>
        <div className="flex gap-1">
          <input
            type="radio"
            name={name}
            id={`yes${id}`}
            value="yes"
            onChange={handleChange}
          />
          <label htmlFor={`yes${id}`}>Yes</label>
        </div>
        <div className="flex gap-1">
          <input
            type="radio"
            name={name}
            id={`no${id}`}
            value="no"
            onChange={handleChange}
          />
          <label htmlFor={`no${id}`}>No</label>
        </div>
      </fieldset>
    </section>
  )
}

export default Question
