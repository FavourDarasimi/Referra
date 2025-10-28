import React, { useState } from "react";
import { Plus, Copy, Trash2, ChevronDown } from "lucide-react";

const BusinessFormBuilder = () => {
  const [fields, setFields] = useState([
    { id: 1, type: "text", label: "Name", placeholder: "" },
    { id: 2, type: "text", label: "Date", placeholder: "" },
    { id: 3, type: "text", label: "Signature", placeholder: "" },
  ]);

  const [selectedField, setSelectedField] = useState(null);
  const [showBranding, setShowBranding] = useState(false);
  const [branding, setBranding] = useState({
    primaryColor: "#6938EF",
    primaryHover: "#6938EF",
    backgroundColor: "#FFFFFF",
    logo: null,
  });

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type: type,
      label: type === "text" ? "Text area" : "Question/Input",
      placeholder: "",
    };
    setFields([...fields, newField]);
  };

  const deleteField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
    setSelectedField(null);
  };

  const updateField = (id, updates) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, ...updates } : f)));
  };

  return <div></div>;
};

export default BusinessFormBuilder;
