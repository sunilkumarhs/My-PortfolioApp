import React, { useEffect, useState } from "react";
import api from "../restApi/portfolio";
import profileImg from "../images/profile-pic.png";
import { Link } from "react-scroll";

const ProfileInfo = ({ setShow, show }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const getInfomation = async () => {
    const response = await api.get("/info");
    return response.data;
  };

  const getProfileInfo = async () => {
    const proinfo = await getInfomation();
    if (proinfo) setProfileInfo(proinfo);
  };

  useEffect(() => {
    getProfileInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(profileInfo);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="bg-slate-200 w-full h-screen text-center px-3 pt-12 pb-36 overflow-y-scroll no-scrollbar">
      {profileInfo ? (
        <div>
          <div className="flex justify-center">
            <div className="w-40 ">
              <img src={profileImg} className="w-full" alt="profilePhoto" />
            </div>
          </div>
          <div className="py-5">
            <p className="font-bold text-xl">{profileInfo.name}</p>
            <p className="text-blue-400 py-2">{profileInfo.tagLine}</p>
            <p>{profileInfo.address}</p>
          </div>
          <nav>
            {/* <ul className="text-sm cursor-pointer">
              {profileInfo?.navLinks?.map((nav) => (
                <li className="py-2 nav-act" key={nav.id}>
                  <Link
                    to={nav.id}
                    smooth={true}
                    offset={nav.id === "home" ? 0 : 100}
                    spy={true}
                    exact="true"
                    duration={200}
                    containerId="containerElement"
                    className="link"
                    onClick={handleClick}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul> */}
            <ul className="text-sm cursor-pointer">
              {profileInfo?.navLinks?.map((nav) => (
                <li className="py-2 nav-act aboutDiv" key={nav.id}>
                  <Link
                    to={nav.id}
                    smooth={true}
                    offset={-60}
                    spy={true}
                    exact="true"
                    duration={200}
                    containerId="containerElement"
                    className="link"
                    onClick={handleClick}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-5">
            <p className="text-xs leading-7 py-2">
              {profileInfo.copyRights}{" "}
              <span className="text-blue-400">{profileInfo.name}</span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileInfo;
