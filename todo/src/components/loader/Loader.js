import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <section className="w-full h-full absolute z-50 top-0 left-0 bg-white/90 flex justify-center items-center">
      <InfinitySpin width="200" color="#3b82f6" />
    </section>
  );
}
