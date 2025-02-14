import Image from "next/image";
import { FaSellsy } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import IconDiscount from "./components/iconDiscount";
import CardMarket from "./components/cardMarket";
import CardMaps from "./components/CardMaps";

export default async function Home() {
  return (
    <main className="bg-low">
      <div className="grid justify-center mt-14 sm:mt-16 lg:mt-20 gap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-0 md:items-center">
          <div className="left">
            <div className="caption grid gap-2">
              <h3 className="text-secondary text-3xl lg:text-5xl font-semibold mb-1 lg:mb-3">Mealapp Cafe</h3>
              <h3 className="text-white bg-secondary text-3xl py-1 px-1.5 sm:px-2 lg:p-2.5 lg:text-5xl font-bold w-min">#CAFEKEKINIAN</h3>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro, illum reiciendis quisquam deleniti iusto accusantium vel quae perspiciatis nulla ducimus natus similique, quod id.</p>
              <Link href="/foods" className="py-1 lg:mt-1.5 bg-secondary rounded-lg text-white font-semibold w-max px-4 lg:px-5">Food Category</Link>
            </div>
          </div>
          <div className="right grid self-center">
            <Image src="https://images.unsplash.com/photo-1485846299386-f367c81034d8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login" width={5000} height={5000} className="w-90/100 justify-self-end md:w-85/100 lg:w-4/5 rounded-lg -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="status mt-16 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-44 text-white py-4 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto bg-secondary">
        <h3 className="text-center text-lg lg:text-xl font-semibold lg:font-bold">Acheivement</h3>
        <p className="text-center font-normal w-90/100 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="mt-2 lg:mt-2.5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardMarket value={100} caption="Cabang" />
          <CardMarket value={96} unit="%" caption="Respon" />
          <CardMarket value={1250} front="+" caption="Pengunjung" />
        </div>
      </div>
      <div className="about my-16 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-center text-lg lg:text-xl font-semibold lg:font-bold">About Me</h3>
        <p className="text-center font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <FaSellsy className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Ramai Pengunjung</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <MdOutlineFavorite className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Favorit</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <SiNamecheap className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Murah</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <GrServices className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Pelayanan Terbaik</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="banner-lanscape relative grid justify-center mt-20 p-3 sm:p-5 lg:p-6 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <Image src="https://images.unsplash.com/photo-1510377971269-d723c13cc478?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login" width={5000} height={5000} className="absolute h-48 sm:h-60 md:h-64 lg:h-64 xl:h-72 object-cover -scale-x-100" />
        <h3 className="text-white text-3xl lg:text-5xl font-semibold z-50" style={{ WebkitTextStroke: "1px #ff5500" }}>Mealapp Cafe</h3>
        <p className="text-white font-medium lg:font-semibold z-50 w-90/100 lg:w-3/4" style={{ textShadow: "0 0 2.5px black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor doloremque soluta optio perspiciatis ipsa harum inventore modi nobis sequi.</p>
      </div>
      <div className="maps grid gap-5 mt-10 mb-10 sm:mt-32 md:mt-40 lg:mt-56 xl:mt-64 w-85/100 md:h-4/5 lg:w-3/4 mx-auto lg:grid-cols-2">
        <div className="caption grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 lg:h-min">
          <div className="description">
            <h3 className="text-secondary text-2xl font-semibold lg:font-bold">Mealapp Cafe</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, blanditiis? Jln. Aseloley No.44 Lumajang</p>
          </div>
          <div className="contact">
            <div className="location grid gap-4">
              <div className="info">
                <div className="flex gap-2 items-center">
                  <PiBuildingOffice className="text-secondary text-3xl" />
                  <h4 className="font-semibold text-lg">Mealapp Cafe</h4>
                </div>
                <p className="ml-9"> Jln. Aseloley No.44 Lumajang</p>
              </div>
              <div className="telp flex gap-2 items-center">
                <BsTelephone className="text-secondary text-2xl mr-1" />
                <p>08123456789</p>
              </div>
              <div className="info flex gap-2 items-center">
                <MdOutlineLocalPostOffice className="text-secondary text-3xl" />
                <p>aseloleycafe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <CardMaps />
        </div>
      </div>
      <IconDiscount /><footer className="footer grid gap-20 bg-gradient-to-t from-secondary text-black text-opacity-80 py-10 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 mx-auto">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="info">
            <h3 className="text-3xl font-semibold">Mealapp Cafe</h3>
            <p>Jln. Aseloley No.44 Lumajang</p>
          </div>
          <div className="company grid gap-1.5">
            <h5 className="font-semibold text-lg">Company</h5>
            <div className="grid gap-0.5">
              <p>Home</p>
              <p>About</p>
              <p>Product</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="legal grid gap-1.5">
            <h5 className="font-semibold text-lg">Legal</h5>
            <div className="grid gap-0.5">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Cookie Policy</p>
              <p>FAQ</p></div>
          </div>
          <div className="contact grid gap-1.5">
            <h5 className="font-semibold text-lg">Contact Us</h5>
            <div className="grid gap-0.5">
              <p>08123456789</p>
              <p>aseloleycafe@gmail</p>
              <p>Jln. Aseloley No.44 Lumajang</p>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <p className="font-semibold text-end mt-1">Copyright © 2022. Mealapp. All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}