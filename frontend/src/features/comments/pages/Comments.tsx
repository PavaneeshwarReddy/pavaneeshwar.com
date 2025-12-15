import Button from '../../../components/Button'
import TextArea from '../../../components/TextArea'

function Comments() {
  return (
    <div className='w-full flex flex-col space-y-4 mt-12'>
      <TextArea placeholder='Anything to say ?' rows={5} maxLength={500}/>
      <div className='self-end'>
        <Button placeholder='Submit'/>
      </div>
    </div>
  )
}

export default Comments