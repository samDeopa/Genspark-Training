import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface VehicleInput {
  ownerName: string;
  contactNumber: number;
  vehicleModel: string;
  registrationNumber: string;
  vehicleColor: string;
}

const VehicleRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<VehicleInput>();
  useEffect(() => {
    setFocus("ownerName");
  }, [setFocus]);

  const onSubmit = (data: VehicleInput) => {
    console.log(data);
    alert("Vehicle Added Successfully");
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col align-middle  w-[600px]"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Owner Name</label>
          <input
            {...register("ownerName", { required: "Owner Name is required" })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.ownerName && (
            <span className="text-red-500">{errors.ownerName.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contact Number</label>
          <input
            {...register("contactNumber", {
              required: "Contact Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact Number must be 10 digits",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.contactNumber && (
            <span className="text-red-500">{errors.contactNumber.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Vehicle Model</label>
          <input
            {...register("vehicleModel", {
              required: "Vehicle Model is required",
            })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.vehicleModel && (
            <span className="text-red-500">{errors.vehicleModel.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Registration Number
          </label>
          <input
            {...register("registrationNumber", {
              required: "Registration Number is required",
              pattern: {
                value: /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/,
                message:
                  "Invalid Registration Number format (e.g., TS09EA1234)",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.registrationNumber && (
            <span className="text-red-500">
              {errors.registrationNumber.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Vehicle Color</label>
          <input
            {...register("vehicleColor", {
              required: "Vehicle Color is required",
            })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.vehicleColor && (
            <span className="text-red-500">{errors.vehicleColor.message}</span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default VehicleRegistration;
