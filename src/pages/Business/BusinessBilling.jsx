import React, { useState } from "react";
import {
  CreditCard,
  Download,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react";
import { FaArrowUp, FaCheck } from "react-icons/fa6";
import Button from "../../components/Button";
import { FaCheckCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Trash2, Check } from "lucide-react";
import DeleteCard from "../../components/DeleteCard";
import AddPaymentCard from "../../components/AddPaymentCard";

const BusinessBilling = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [paymentCards, setPaymentCards] = useState([]);

  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const billingHistory = [
    {
      plan: "Free",
      amount: "$0.00",
      status: "Overdue",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      plan: "Advanced",
      amount: "$100.00",
      status: "Paid",
      date: "12 Mar, 2024 7:00PM",
    },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(billingHistory.length / itemsPerPage);
  const paginatedHistory = billingHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status) => {
    if (status === "Paid")
      return "bg-[#E7F8F0] border border-[#12B76A] text-[#0D824B]";
    if (status === "Overdue")
      return "bg-[#FEECEB] border border-[#F04438] text-[#AA3028]";
    return "bg-[#F2F4F7] text-[#667085]";
  };

  const handleAddCard = (data) => {
    const lastFour = data.cardNumber.slice(-4);
    const defaultCard = paymentCards.length === 0 ? true : false;
    setPaymentCards([
      ...paymentCards,
      {
        id: paymentCards.length + 1,
        type: data.paymentMethod || "visa",
        cardName: data.paymentMethod
          ? `${
              data.paymentMethod.charAt(0).toUpperCase() +
              data.paymentMethod.slice(1)
            } Card`
          : "Visa Card",
        holderName: data.cardHolderName,
        lastFour,
        expiryDate: data.expiryDate,
        isDefault: defaultCard,
      },
    ]);
  };

  const setDefaultCard = (id) => {
    setPaymentCards((prev) =>
      prev.map((card) => ({ ...card, isDefault: card.id === id }))
    );
  };

  const deleteCard = (id) => {
    setPaymentCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleDelete = (id) => {
    setPaymentCards((prev) => prev.filter((card) => card.id !== id));
    setCardToDelete(null);
  };

  const getCardLogo = (type) => {
    switch (type) {
      case "visa":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-3 w-[34px]"
          />
        );
      case "mastercard":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-5 w-[34px]"
          />
        );
      case "amex":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
            alt="Amex"
            className="h-5"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-[24px] space-y-[20px]  rounded-[20px] ">
      {cardToDelete && (
        <DeleteCard
          card={cardToDelete}
          onClose={() => setCardToDelete(null)}
          onConfirm={handleDelete}
        />
      )}
      {showPaymentModal && (
        <AddPaymentCard
          onClose={() => setShowPaymentModal(false)}
          onAddCard={handleAddCard}
        />
      )}
      {/* Header */}
      <div>
        <h1 className="text-[24px] font-semibold text-[#344054]">Billing</h1>
      </div>

      <div className=" gap-[34px]">
        {/* Left Column */}
        <div className="space-y-[34px]">
          {/* Current Plan */}
          <div className="rounded-[20px] p-[24px] space-y-[20px] flex gap-[120px]">
            <div className="space-y-[12px] w-[40%]">
              <h2 className="text-[16px] font-semibold text-[#101828]">
                Current Plan
              </h2>
              <p className="text-[14px] text-[#667085]">
                You can update your plan anytime for best benefit from the
                product and track your project
              </p>
            </div>

            <div className="border-[1px] w-full border-[#E4E7EC] rounded-[12px] p-[20px] space-y-[24px]">
              <div className="flex items-start gap-x-[16px] w-full">
                <Shield className="w-[24px] h-[24px]" />
                <div className="space-y-[24px] w-full">
                  <div className="space-y-[16px]">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-[24px]">
                        <span className="text-[16px] font-semibold text-[#101828]">
                          Free plan
                        </span>
                        <span className="text-[16px] font-semibold text-[#6938EF]">
                          $0/month
                        </span>
                      </div>

                      <FaCheckCircle className="fill-[#6938EF] w-[20px] h-[20px]" />
                    </div>

                    <p className="text-[14px] text-[#667085]">
                      Includes up to 20 responses, 5 templates and sending
                      directly to email
                    </p>
                  </div>
                  <Button
                    size="mini"
                    type="primary"
                    title="Upgrade plan"
                    Icon={FaArrowUp}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-t-[#E4E7EC]"></div>

          {/* Payment Details */}
          <div className="rounded-[20px] p-[24px] space-y-[20px] flex gap-[120px]">
            <div className="space-y-[12px] w-[40%]">
              <h2 className="text-[16px] font-semibold text-[#101828]">
                Payment details
              </h2>
              <p className="text-[14px] text-[#667085]">
                Select Default Payment method or switch card details
              </p>
            </div>

            <div className="w-full space-y-[16px]">
              {paymentCards.length > 0 ? (
                <>
                  {/* Payment Cards List */}
                  <div className="space-y-4 mx-auto">
                    {paymentCards.map((card) => (
                      <div
                        key={card.id}
                        className={`relative p-[20px] rounded-xl border ${
                          card.isDefault
                            ? "border-[#6938EF] bg-[#F0EBFD]"
                            : "border-[#E4E7EC] bg-white"
                        } transition-all`}
                      >
                        <div className="flex items-start gap-[16px]">
                          <div className="">{getCardLogo(card.type)}</div>
                          <div className="space-y-[16px] w-full">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold [#101828]">
                                {card.cardName}
                              </h3>

                              {card.isDefault ? (
                                <FaCheckCircle className="fill-[#6938EF] w-[20px] h-[20px]" />
                              ) : (
                                <button
                                  onClick={() => setCardToDelete(card)}
                                  className="text-[#98A2B3] hover:text-red-500"
                                >
                                  <Trash2 size={20} />
                                </button>
                              )}
                            </div>
                            <div className="space-y-[8px]">
                              <p className="text-[14px] text-[#667085]">
                                {card.holderName} **** **** **** {card.lastFour}
                              </p>
                              <div className="flex justify-between">
                                <p className="text-[14px] text-[#667085]">
                                  Expires on {card.expiryDate}
                                </p>

                                <div className="">
                                  {card.isDefault ? (
                                    <Button
                                      type="primaryLight"
                                      size="mini"
                                      title="Default card"
                                      handleSubmit={() =>
                                        setDefaultCard(card.id)
                                      }
                                      Icon={CreditCard}
                                    />
                                  ) : (
                                    <Button
                                      type="primary"
                                      size="mini"
                                      title="Set as default card"
                                      handleSubmit={() =>
                                        setDefaultCard(card.id)
                                      }
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add New Payment Method Button */}
                  {paymentCards.length == 2 ? (
                    ""
                  ) : (
                    <div className="flex justify-end w-full">
                      <Button
                        type="primary"
                        size="small"
                        title="Add a new payment method"
                        handleSubmit={() => setShowPaymentModal(true)}
                        Icon={MdAdd}
                      />
                    </div>
                  )}
                </>
              ) : (
                // Empty State
                <div className="border-[2px] border-dashed border-[#E4E7EC] rounded-[12px] p-[20px] flex flex-col items-center justify-center gap-[24px]">
                  <div className="flex flex-col items-center space-y-[16px]">
                    <div className="p-[10px] bg-[#F2F4F7] rounded-full w-fit">
                      <CreditCard className="w-[24px] h-[24px] text-[#667085]" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#101828]">
                      Add a new payment method
                    </h3>
                    <p className="text-[14px] text-[#667085]">
                      This payment method will be saved for future billings
                    </p>
                  </div>

                  <Button
                    type="primary"
                    size="mini"
                    title="Add a new payment method"
                    handleSubmit={() => setShowPaymentModal(true)}
                    Icon={MdAdd}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-t-[#E4E7EC]"></div>

          <div className="rounded-[20px] p-[24px] space-y-[20px] flex gap-[120px]">
            <div className="space-y-[12px] w-[40%]">
              <h2 className="text-[16px] font-semibold text-[#101828]">
                Billing history
              </h2>
              <p className="text-[14px] text-[#667085]">
                Summary on the payment history for the subscription plan of the
                application
              </p>

              {/* Table */}
            </div>
            <div className="w-full">
              {" "}
              <div className="border border-[#F0F1F3] rounded-[20px]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#F0F1F3]">
                      <th className="px-[24px] flex items-center gap-[12px] py-[12px] text-left text-[12px] font-semibold text-[#5D6679]">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-[#D0D3D9] rounded"
                        />
                        Plan
                      </th>
                      <th className="px-[24px] py-[12px] text-left text-[12px] font-semibold text-[#5D6679]">
                        Amount
                      </th>
                      <th className="px-[24px] py-[12px] text-left text-[12px] font-semibold text-[#5D6679]">
                        Status
                      </th>
                      <th className="px-[24px] py-[12px] text-left text-[12px] font-semibold text-[#5D6679]">
                        Date created
                      </th>
                      <th className="px-[24px] py-[12px] text-center text-[12px] font-semibold text-[#5D6679]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedHistory.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-[#F0F1F3] hover:bg-[#F9FAFB] transition-colors"
                      >
                        <td className="px-[24px] flex items-center gap-[12px] py-[16px] text-[14px] font-medium text-[#344054]">
                          <input
                            type="checkbox"
                            className="w-4 h-4 border-[#D0D3D9] rounded"
                          />
                          {item.plan}
                        </td>
                        <td className="px-[24px] py-[16px] text-[14px] text-[#667085]">
                          {item.amount}
                        </td>
                        <td className="px-[24px] py-[16px]">
                          <span
                            className={`px-[8px] rounded-full text-[12px] ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-[24px] py-[16px] text-[14px] text-[#667085]">
                          {item.date}
                        </td>
                        <td className="px-[24px] py-[16px] text-center">
                          <button className="text-[#667085]  transition-colors">
                            <Download className="w-[18px] h-[18px]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-between pt-[20px]">
                {/* Previous */}
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 border border-[#F0F1F3] rounded-full text-sm font-medium text-[#667085] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {/* Page numbers */}
                <div className="flex gap-1 items-center">
                  {(() => {
                    const pages = [];
                    const total = totalPages;
                    const delta = 1;

                    for (let i = 1; i <= total; i++) {
                      if (
                        i === 1 ||
                        i === total ||
                        (i >= currentPage - delta && i <= currentPage + delta)
                      ) {
                        pages.push(i);
                      } else if (
                        (i === currentPage - delta - 1 && i > 1) ||
                        (i === currentPage + delta + 1 && i < total)
                      ) {
                        pages.push("...");
                      }
                    }

                    return pages.map((p, idx) =>
                      p === "..." ? (
                        <span
                          key={idx}
                          className="w-8 h-8 flex items-center justify-center text-[#667085]"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => setCurrentPage(p)}
                          className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                            currentPage === p
                              ? "bg-white border border-[#F0F1F3] text-[#344054]"
                              : "text-[#667085] hover:bg-[#F2F4F7]"
                          }`}
                        >
                          {p}
                        </button>
                      )
                    );
                  })()}
                </div>

                {/* Next */}
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 border border-[#F0F1F3] rounded-full text-sm font-medium text-[#667085] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
      </div>
    </div>
  );
};

export default BusinessBilling;
