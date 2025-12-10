import Me from "../../../assets/me.jpeg"
import Link from "../../../components/Link"
import ExperienceStepper from "../components/ExperienceStepper"
import { ProfileDummyData } from "../data/ProfileData"

function Profile() {
  return (
    <div className="w-full flex flex-col space-y-12 justify-center items-center">
      <div className='w-full flex flex-row space-x-4'>
        <div className="lg:w-1/4 w-full">
          <img
            src={Me}
            className="object-contain"
          />
        </div>
        <div className="w-3/4 flex flex-col justify-end space-y-4">
          <div>
            <div className="text-3xl">
              {ProfileDummyData.profileSection.name}
            </div>
            <div className="text-lg">
              {ProfileDummyData.profileSection.designation}
            </div>
            <div>{ProfileDummyData.profileSection.bio}</div>
            <div>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            {
              ProfileDummyData.profileSection.socialMedia.map((media, idx) => {
                return <Link key={idx} label={media.label} value={media.link} />
              })
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-1/4">
          <div className="text-3xl">
            Experience
          </div>
          <div>
            {ProfileDummyData.experienceSection.description}
          </div>
        </div>
        <div className="w-3/4">
          <ExperienceStepper experiences={ProfileDummyData.experienceSection.experiences} />
        </div>
      </div>
    </div>
  )
}

export default Profile