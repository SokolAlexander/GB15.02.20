import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState } from "react";

import { changeName, CHANGE_NAME } from "../../store/profile/actions";

export default function Profile() {
  const [value, setValue] = useState('');
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const setName = useCallback(() => {
    dispatch(changeName(value));
  }, [dispatch, value]);

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

// const mapStateToProps = state => ({
//   profile: state.profile,
// });

// const mapDispatchToProps = {
//   setNewName: changeName
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// import React from 'react';

// export default class Profile extends React.Component {
//   render() {
//       return (
//         <>
//           <div>
//             <h4>Profile</h4>
//             {/* <span>
//               {profile.name}: {profile.age}
//             </span> */}
//           </div>
//           {/* <div>
//             <input type="text" value={value} onChange={handleChange} />
//           </div>
//           <div>
//             <button onClick={setName}>Change Name</button>
//           </div> */}
//         </>
//       );
//   }
// }