import React, { useState } from "react";
import { X, CreditCard } from "lucide-react";
import Button from "./Button";

const AddPaymentCard = ({ onClose, onAddCard }) => {
  const [formData, setFormData] = useState({
    paymentMethod: "",
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.cardHolderName &&
      formData.cardNumber &&
      formData.expiryDate &&
      formData.cvv
    ) {
      onAddCard(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white rounded-[20px] w-[520px] py-[20px]  relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="space-y-[25px] py-[20px] px-[40px]">
          <div className="text-center space-y-[20px] flex flex-col items-center">
            <div className="bg-[#F0EBFD] border border-[#6938EF] rounded-full p-[10px] text-[#6938EF] w-fit ">
              <CreditCard />
            </div>
            <div className="space-y-[7px]">
              <h2 className="text-[24px] font-semibold text-[#101828]">
                Add new payment method
              </h2>
              <p className="text-[14px] text-[#667085] ">
                Add a new payment method to your account for billing purposes.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[25px]">
            {/* Payment method */}
            <div>
              <label className="text-[14px] font-semibold">
                Payment method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] border-[#E4E7EC]
              `}
              >
                <option value="">Select method</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
              </select>
            </div>

            {/* Card holder name */}
            <div>
              <label className="text-[14px] font-semibold">
                Card holder name
              </label>
              <input
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] border-[#E4E7EC]
              `}
              />
            </div>

            {/* Card number */}
            <div>
              <label className="text-[14px] font-semibold">Card number</label>
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] border-[#E4E7EC]
              `}
              />
            </div>

            {/* Expiry date & CVV */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-[14px] font-semibold">Expiry date</label>
                <input
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, ""); // allow only digits
                    if (value.length > 4) value = value.slice(0, 4);
                    if (value.length > 2)
                      value = value.slice(0, 2) + "/" + value.slice(2);
                    setFormData((prev) => ({ ...prev, expiryDate: value }));
                  }}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] border-[#E4E7EC]"
                />
              </div>
              <div className="flex-1">
                <label className="text-[14px] font-semibold">CVV/CVC</label>
                <input
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] border-[#E4E7EC]
              `}
                />
              </div>
            </div>

            {/* Billing address */}
            <div>
              <label className="text-[14px] font-semibold">
                Billing address
              </label>
              <input
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                placeholder="123 Main Street"
                className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] border-[#E4E7EC]
              `}
              />
            </div>

            <div className="flex justify-end">
              {" "}
              <Button type="primary" title="Add payment method" size="large" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentCard;
