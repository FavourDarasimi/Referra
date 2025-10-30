import React from "react";
import { Trash2, X } from "lucide-react";
import Button from "./Button";

const DeleteCard = ({ card, onClose, onConfirm }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex w-full items-center justify-center z-50 h-screen">
      <div className="bg-white w-[520px] rounded-2xl  p-6 shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="py-[20px] px-[40px] space-y-[25px]">
          <div className="flex justify-center ">
            <div className="bg-[#FEECEB] border border-[#F04438] text-[#F04438] rounded-full p-[10px]">
              <Trash2 size={20} />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-[7px]">
            <h2 className="text-center text-[24px] font-bold text-[#101828]">
              Delete payment method
            </h2>
            <p className="text-center text-[#667085] text-sm ">
              Are you sure you want to delete this payment method?
            </p>
          </div>

          {/* Card Preview */}
          <div className="border border-[#E4E7EC] rounded-xl p-[20px] flex items-start gap-[16px]">
            {card.type === "visa" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="h-4"
              />
            )}
            {card.type === "mastercard" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-5"
              />
            )}
            {card.type === "amex" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
                alt="Amex"
                className="h-5"
              />
            )}
            <div className="space-y-[16px]">
              <h3 className="font-medium text-[#101828]">{card.cardName}</h3>
              <div className="space-y-[8px]">
                <p className="text-sm text-[#667085]">
                  {card.holderName} **** **** **** {card.lastFour}
                </p>
                <p className="text-sm text-[#667085]">
                  Expires on {card.expiryDate}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-[20px] ">
            <Button
              type="neutralOutline"
              size="large"
              handleSubmit={onClose}
              title="No, cancel."
            />

            <Button
              type="red"
              size="large"
              handleSubmit={() => onConfirm(card.id)}
              title="Yes, delete.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
