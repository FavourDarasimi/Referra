import { useState } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import { RxCross2 } from "react-icons/rx";
import { MdUploadFile } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const BusinessProfileImage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/business/signin");
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="w-[480px] space-y-[40px] flex flex-col items-center">
          <h1 className="text-[24px] text-center font-bold">
            Upload your logo
          </h1>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="w-[400px] h-[264px] gap-[16px] border-2 border-dashed border-[#E4E7EC] rounded-[16px] py-[28px] px-[24px] flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#6033D9] transition-all duration-300"
          >
            {file ? (
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-700">{file.name}</p>
                <button
                  onClick={handleRemoveFile}
                  className="cursor-pointer flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  <RxCross2 className="w-4 h-4" /> Remove file
                </button>
              </div>
            ) : (
              <>
                <div className="p-[14px] bg-[#F2F4F7]  rounded-full">
                  <MdUploadFile className="text-[#667085] w-[28px] h-[28px] " />
                </div>
                <div className="space-y-[4px]">
                  <div className="flex items-center gap-[4px] text-[14px]">
                    <label
                      htmlFor="file-upload"
                      className="text-[#6938EF] font-semibold cursor-pointer hover:underline"
                    >
                      Click to upload
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <p className="text-[#667085] ">or drag and drop</p>
                  </div>
                  <p className="text-[12px] text-[#98A2B3]">
                    PNG, JPG or PDF (max. 800x400px)
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <div className="flex-grow h-px bg-[#E4E7EC]"></div>
                  <span className="mx-3 text-[12px] text-[#98A2B3] font-smibold">
                    OR
                  </span>
                  <div className="flex-grow h-px bg-[#E4E7EC]"></div>
                </div>

                <Button
                  type="primary"
                  size="small"
                  title="Browse Files"
                  styles="font-medium py-[4px] px-[18px]"
                  handleSubmit={() =>
                    document.getElementById("file-upload").click()
                  }
                />
              </>
            )}
          </div>
          <div className=" grid grid-cols-3 gap-[40px] w-[400px]">
            <Button
              type="neutralOutline"
              full={true}
              title="Back"
              Icon={IoArrowBack}
              handleSubmit={handleBack}
            />

            <Button
              full={true}
              type="primary"
              title="Continue"
              handleSubmit={handleContinue}
              styles={`col-span-2 ${
                file
                  ? "cursor-pointer bg-[#6938EF]"
                  : "bg-[#6938EF]/50 cursor-not-allowed pointer-events-none"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileImage;
