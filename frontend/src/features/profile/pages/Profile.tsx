import Me from "../../../assets/me.jpeg"
import Link from "../../../components/Link"
import Stepper from "../../../components/Stepper"

function Profile() {
  return (
    <div className="w-full flex flex-col space-y-12">
      <div className='w-full flex flex-row space-x-4'>
      <div className="lg:w-1/4 w-full">
        <img
          src={Me}
          className="object-contain"
        />
      </div>
      <div className="w-7/12 flex flex-col justify-end space-y-4">
        <div>
          <div className="text-3xl">
            Guda Pavaneeshwar Reddy
          </div>
          <div className="text-lg">
            Developer & Explorer
          </div>
          <div>I’m getting tired of working on large projects where the internal logic is hidden like a black box—where all we do is run their CLI tools or call APIs as wrappers. Lately, I’ve been more interested in picking up big open-source projects and trying to build similar systems myself. It helps me understand how well-structured code is written and how things truly work behind the scenes. I want to build things from the ground up, brick by brick. Sure, it takes more time, but learning how a complete system is designed is just as important as knowing how to use it. Right now, I just want to build, break, and learn.</div>
          <div>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <Link label="Instagram" value="https://www.instagram.com" />
          <Link label="Twitter" value="https://www.instagram.com" />
          <Link label="Github" value="https://www.instagram.com" />
          <Link label="Linkedin" value="https://www.instagram.com" />
        </div>
      </div>
    </div>
    <div className="flex flex-row w-full">
      <div className="w-1/4">
        <div className="text-3xl">
            Experience
        </div>
        <div>
         Experience working as a developer in unicorn startups, fintech, and compliance-driven organizations
        </div>
      </div>
      <div className="w-3/4">
        <Stepper/>
      </div>
    </div>
    </div>
  )
}

export default Profile