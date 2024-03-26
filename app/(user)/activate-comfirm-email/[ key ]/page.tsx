import { ConfirmIcon } from "@/components/icon/FontAwesome";
type Props = {
  params: {
    key: string;
  };
  searchParams: any;
};

import style from "./style.module.css";
import Button from "./components/Button";

export default function ConfirmEmail(props: Props) {
  return (
    <main className={style.container}>
      {/* Confirm Email Card */}
      <section className="flex flex-col items-center">
        {/* Icon Confirm */}
        <ConfirmIcon color="#080" classname="h-44 w-44 mb-8" />
        {/* Title */}
        <h1 className="text-6xl my-4">Email has been Confirmed!</h1>
        {/* Description */}
        <p className="uppercase text-3xl text-center">
          Your email comfirmed! you can go to login page by press below button!
        </p>

        <p className="text-4xl text-center  m-5">
          សួរស្តីដែលបានចូលមកដល់សេចក្ដីសុវត្ថិភាពរបស់ខ្ញុំ!
          ខ្ញុំគិតថាអ្នកមានពេលវេលាច្រើនដើម្បីស្គាល់គ្នាជាមួយនឹងគ្នានៅក្នុងប្រទេសកម្ពុជា។
          តើអ្នកជាអ្នកនៅពីបច្ចុប្បន្នដែលស្គាល់គ្នាខ្មែរហើយឬនៅមិនបច្ចុប្បន្នដែលមិនស្គាល់គ្នាទេ?
          សូមទទួលបានសំណួរជាច្រើនរបស់ខ្ញុំប្រចាំថ្ងៃ។ រីករាយគ្នាជាមួយ!
        </p>
        {/* Button */}
        <Button title="Login" classname="my-8" />
      </section>
    </main>
  );
}
