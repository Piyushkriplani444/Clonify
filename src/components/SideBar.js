import React from "react";

import icon1 from "../assets/img/icon.svg";
import stats from "../assets/img/Stats.svg";
import message from "../assets/img/email.svg";
import user from "../assets/img/users.svg";
import apps from "../assets/img/layout-grid.svg";
import support from "../assets/img/Support.svg";
import settings from "../assets/img/Settings.svg";
import logout from "../assets/img/logout.svg";
import globe from "../assets/img/globe.svg";
import folder from "../assets/img/folder.svg";

const Sidebar = () => {
  return (
    <aside className="min-w-[232px] sm:block hidden max-h-[1024px]">
      {/* brand image */}
      <div>
        <img src={icon1} className="pl-[20px] pt-[18px]" />
      </div>
      {/* Dashboard Start*/}
      <div className="pt-[54px] w-full">
        <div className="pl-[20px] text-neutral-400 text-xs font-semibold font-['Inter'] leading-tight">
          D&nbsp;A&nbsp;S&nbsp;H&nbsp;B&nbsp;O&nbsp;A&nbsp;R&nbsp;D
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium flex justify-start items-center">
              <div>
                <img src={stats} className="w-[20px] h-[20px]" />
              </div>
              <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                Dashboard
              </div>
            </div>
            <div className="collapse-content pl-[28px]">
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Analytics
                </button>
              </div>
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Finance
                </button>
              </div>
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Job Board
                </button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium flex justify-start items-center">
              <div>
                <img src={message} className="w-[20px] h-[20px]" />
              </div>
              <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                Mesages
              </div>
            </div>
            <div className="collapse-content pl-[28px]">
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Hii !!
                </button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium flex justify-start items-center">
              <div>
                <img src={user} className="w-[20px] h-[20px]" />
              </div>
              <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                Friends
              </div>
            </div>
            <div className="collapse-content pl-[28px]">
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Rahul
                </button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium flex justify-start items-center">
              <div>
                <img src={apps} className="w-[20px] h-[20px]" />
              </div>
              <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                Apps
              </div>
            </div>
            <div className="collapse-content pl-[28px]">
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Instagram{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard END*/}
      {/* Pages Start*/}
      <div className="pt-[54px] w-full">
        <div className="pl-[20px] text-neutral-400 text-xs font-semibold font-['Inter'] leading-tight">
          P&nbsp;A&nbsp;G&nbsp;E&nbsp;S
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium flex justify-start items-center">
              <div>
                <img src={support} className="w-[20px] h-[20px]" />
              </div>
              <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                Help Center
              </div>
            </div>
            <div className="collapse-content pl-[28px]">
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium flex justify-start items-center">
              <div>
                <img src={folder} className="w-[20px] h-[20px]" />
              </div>
              <div className="text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                File Manager
              </div>
            </div>
            <div className="collapse-content pl-[28px]">
              <div>
                <button className="text-zinc-500 hover:text-zinc-800 text-sm font-semibold font-['Inter'] leading-snug">
                  Manage your files{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pages END*/}
      <div className="mt-[392px]">
        <div className="h-[1px] bg-slate-200 mb-[5px]"></div>
        <div className="flex justify-between items-center mx-[20px]">
          <div>
            <button>
              <img src={settings} />
            </button>
          </div>
          <div>
            <button>
              <img src={logout} />
            </button>
          </div>
          <div>
            <button>
              <img src={globe} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
