import { connect } from "react-redux";
import { useCallback, useState } from "react";

import { changeName } from "../../store/profile/actions";

function Profile({ profile, setNewName }) {
  const [value, setValue] = useState('');
  // const profile = useSelector((state) => state.profile);
  // const dispatch = useDispatch();

  const setName = useCallback(() => {
    setNewName(value);
    // dispatch(changeName('new name'));
  }, [setNewName, value]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <div>
        <h4>Profile</h4>
        <span>
          {profile.name}: {profile.age}
        </span>
      </div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div>
        <button onClick={setName}>Change Name</button>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  setNewName: changeName
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
