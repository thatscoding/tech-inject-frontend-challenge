import Navbar from "../components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { useUserAuth } from "../services/contexts/AuthContext.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(1);
  const { currentUser, logout } = useUserAuth();
  const navigate = useNavigate();

  const handleTheme = () => {
    console.log(theme);
    setTheme((prev) => {
      const ans = prev + 1;
      if (ans % 4 == 0) {
        return 1;
      }
      return ans % 4;
    });
  };

  const myArray = [1, 2, 3, 4, 5];

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
    if (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={`
    ${theme === 1 && "bg-[#DBD4C1] duration-700 ease-in-out"}
    ${
      theme === 2 &&
      "bg-[#781E1E] text-[white!importanat] duration-700 ease-in-out text-white"
    }
    ${theme === 3 && "bg-[#DAB0A4] duration-700 ease-in-out"}
     px-2 md:px-20 py-10 h-full 2xl:h-screen

     
  `}
    >
      <div className="container mx-auto xl:max-w-7xl h-full">
        <div
          className={`
        ${theme === 1 && "bg-[#F9F4E5] duration-700 ease-in-out"}
        ${theme === 2 && "bg-[#AF2323] duration-700 ease-in-out"}
        ${theme === 3 && "bg-[#FECDBE] duration-700 ease-in-out"}
      `}
        >
          <div className=" relative h-full overflow-hidden z-50">
            <Navbar email={currentUser?.email} handleLogout={handleLogout} />

            <div className="flex h-full">
              <div className="w-full lg:w-[55%] border  pb-10 ">
                <div className="border pt-20 pb-10 pl-10 xl:pl-20 pr-6">
                  <div className=" text-4xl xs:text-5xl sm:text-6xl  font-extralight font-inter">
                    <h1>Just relax, and </h1>
                    <h1>go with the flow</h1>
                  </div>
                  <p className="text-sm mt-6 sm:pr-6 lg:pr-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa earum reprehenderit tempora dolor rerum laborum, harum
                    fugit placeat adipisci alias amet aspernatur, temporibus est
                    corporis odio doloremque voluptas eum. Consequuntur.
                  </p>

                  <button className="w-32 h-10 border rounded-full mt-8 border-gray-500">
                    View More
                  </button>
                </div>
                <div className="border-l border-t ">
                  <span className="block sm:hidden rounded-xl px-10">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1671244417901-6d0f50085167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="wine bottle"
                      className="w-full   rounded-xl opacity-70"
                    />
                  </span>
                  <div className="flex justify-between px-10 items-center py-4 gap-4">
                    <span className="hidden sm:block">
                      <img
                        width={100}
                        height={100}
                        src="https://plus.unsplash.com/premium_photo-1671244417901-6d0f50085167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="wine bottle"
                        className=" w-40  h-24 rounded opacity-70"
                      />
                    </span>
                    <div className="">
                      <h2 className="font-semibold text-base">
                        Come to the Wine-tasting
                      </h2>
                      <p className="text-[0.8rem] w-full sm:w-80  lg:w-60 2xl:w-80 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit, commodi possimus repudiandae optio nemo nulla?
                      </p>

                      <button className="mx-10 hidden lg:block xl:hidden  w-32 xl:w-40 2xl:w-32  h-10 border rounded-full mt-4 border-gray-500">
                        Read more
                      </button>
                    </div>
                    <button className="hidden md:block lg:hidden xl:block w-32 h-10 border rounded-full mt-8 border-gray-500">
                      Read more
                    </button>
                  </div>
                  <button className="mx-10 md:hidden  w-32 xl:w-40 2xl:w-32  h-10 border rounded-full mt-4 border-gray-500">
                    Read more
                  </button>
                </div>
              </div>

              <div className="w-[45%]  h-full hidden lg:flex  ">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {myArray.map((index) => (
                    <SwiperSlide key={index}>
                      <List price={index + 500} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="px-6 lg:hidden">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {myArray.map((index) => (
                <SwiperSlide key={index}>
                  <List price={index + 500} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div
          className="blur absolute bg-[#C1F5FF] top-[5%] left-0 sm:left-[10%] sm:top-[5%]"
          style={{ background: "#C1F5FF" }}
        ></div>

        <div
          className="blur absolute bg-[#f7ebff] right-0 bottom-0 sm:right-[5%] sm:bottom-[5%]"
          style={{
            background: "rgb(238,210,255)",
          }}
        ></div>

        <button
          onClick={() => handleTheme()}
          className="hidden lg:block absolute  border-2 rounded-full w-16 h-16 "
          style={{
            borderColor: "rgb(238,210,255)",
            right: "21%",
            top: "25%",
            zIndex: 999999,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
