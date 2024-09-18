import {ClipLoader} from "react-spinners";

export default function Spinner({fullWidth}) {
  if(fullWidth) {
    return (
      <div className="w-full flex justify-center">
        <ClipLoader color="#1e3a8a" speedMultiplier={2} />
      </div>
    );
  }
  return (
    <ClipLoader color="#1e3a8a" speedMultiplier={2} />
  );
}