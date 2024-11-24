import  { btnStyles, inputStyles } from "@/customHooks/profile/useProfileLogic";

const ProfileForm = (props: any) => {
    const {
        setProfileData,
        handleSubmit,
        full_name_en,
        full_name_ka,
        phone_number,
        avatar_url,
      } = props;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={full_name_en}
          onChange={(e) =>
            setProfileData((prev: any) => ({
              ...prev,
              full_name_en: e.target.value,
            }))
          }
          className={inputStyles}
          required
        />
      </div>
      <div>
        <label
          htmlFor="nameGeo"
          className="mb-2 block font-medium text-gray-700"
        >
          Name (Georgian):
        </label>
        <input
          type="text"
          id="nameGeo"
          value={full_name_ka}
          onChange={(e) =>
            setProfileData((prev: any) => ({
              ...prev,
              full_name_ka: e.target.value,
            }))
          }
          className={inputStyles}
        />
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="mb-2 block font-medium text-gray-700"
        >
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phone_number}
          onChange={(e) =>
            setProfileData((prev: any) => ({
              ...prev,
              phone_number: e.target.value,
            }))
          }
          className={inputStyles}
        />
      </div>
      <div>
        <label
          htmlFor="avatarUrl"
          className="mb-2 block font-medium text-gray-700"
        >
          Avatar URL:
        </label>
        <input
          type="url"
          id="avatarUrl"
          value={avatar_url}
          onChange={(e) =>
            setProfileData((prev: any) => ({
              ...prev,
              avatar_url: e.target.value,
            }))
          }
          className={inputStyles}
        />
      </div>
      <button
        type="submit"
        className={`${btnStyles} bg-indigo-500 hover:bg-indigo-700`}
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
