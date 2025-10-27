import React, { useState } from "react";
import {
  MoreVertical,
  Edit,
  Copy,
  Trash,
  Globe,
  Upload,
  X,
} from "lucide-react";
import Button from "../../components/Button";

const BusinessDrafts = () => {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: "Template title",
      status: "Published",
      updated: "2 days ago",
    },
    { id: 2, title: "Template title", status: "Draft", updated: "2 days ago" },
    { id: 3, title: "Template title", status: "Draft", updated: "2 days ago" },
    { id: 4, title: "Template title", status: "Draft", updated: "2 days ago" },
  ]);

  const [drafts, setDrafts] = useState([
    {
      id: 1,
      title: "Title of reference form",
      status: "Published",
      updated: "2 days ago",
    },
    {
      id: 2,
      title: "Title of reference form",
      status: "Draft",
      updated: "2 days ago",
    },
  ]);

  const [openMenu, setOpenMenu] = useState(null);

  // Handlers
  const handleMenuToggle = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleEdit = (id, type) => {
    alert(`Editing ${type} with ID ${id}`);
  };

  const handleClone = (id, type) => {
    const sourceList = type === "template" ? templates : drafts;
    const setter = type === "template" ? setTemplates : setDrafts;
    const item = sourceList.find((t) => t.id === id);
    const newItem = { ...item, id: Date.now(), title: `${item.title} (Copy)` };
    setter([...sourceList, newItem]);
  };

  const handleRename = (id, type) => {
    const newTitle = prompt("Enter new name:");
    if (!newTitle) return;
    const setter = type === "template" ? setTemplates : setDrafts;
    const list = type === "template" ? templates : drafts;
    setter(list.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
  };

  const handleDelete = (id, type) => {
    const setter = type === "template" ? setTemplates : setDrafts;
    const list = type === "template" ? templates : drafts;
    setter(list.filter((t) => t.id !== id));
  };

  const handleTogglePublish = (id, type) => {
    const setter = type === "template" ? setTemplates : setDrafts;
    const list = type === "template" ? templates : drafts;
    setter(
      list.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "Published" ? "Draft" : "Published",
            }
          : t
      )
    );
  };

  const handleCreateNew = () => {
    const newDraft = {
      id: Date.now(),
      title: "New reference form",
      status: "Draft",
      updated: "Just now",
    };
    setDrafts([...drafts, newDraft]);
  };

  return (
    <div className="space-y-10">
      {/* Templates Section */}
      <section className="bg-white rounded-2xl p-[32px] space-y-[32px]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Get started with templates – Quick ⚡
          </h2>
          <button
            onClick={() => alert("Close templates section")}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex  gap-[32px]">
          {templates.map((t) => (
            <div className="space-y-[8px] relative w-[200px]">
              <div
                key={t.id}
                className="relative flex flex-col justify-center h-[194px] group rounded-xl p-4 bg-[#F2F4F7] hover:bg-[#E4E7EC] transition-all duration-300"
              >
                {/* Status Badge */}
                <span
                  className={`absolute border-[1px] top-2 right-2 px-2 py-[2px] rounded-full text-xs font-medium ${
                    t.status === "Published"
                      ? "bg-[#D1FADF] text-[#027A48] border-[#12B76A]"
                      : "bg-[#E4E7EC] text-[#344054] border-[#98A2B3]"
                  }`}
                >
                  {t.status}
                </span>

                {/* Open Template Button */}

                <Button
                  type="primary"
                  handleSubmit={() => alert(`Opening template ${t.title}`)}
                  title="Open template"
                  size="mini"
                  styles="group-hover:opacity-100 opacity-0 transition-all duration-300"
                />

                {/* 3-Dot Menu */}
              </div>
              <div className="flex justify-between p-[4px]">
                <div className="">
                  <p className="text-sm font-medium text-gray-800">{t.title}</p>
                  <p className="text-xs text-gray-500">
                    Last updated {t.updated}
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => handleMenuToggle(`template-${t.id}`)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenu === `template-${t.id}` && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 shadow-lg rounded-lg z-50">
                      <ul className="text-sm text-gray-700">
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleEdit(t.id, "template")}
                        >
                          <Edit size={14} /> Edit
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleClone(t.id, "template")}
                        >
                          <Copy size={14} /> Clone
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleRename(t.id, "template")}
                        >
                          <Upload size={14} /> Rename
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleTogglePublish(t.id, "template")}
                        >
                          <Globe size={14} />{" "}
                          {t.status === "Published" ? "Unpublish" : "Publish"}
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 text-red-500 cursor-pointer flex items-center gap-2 border-t border-gray-100"
                          onClick={() => handleDelete(t.id, "template")}
                        >
                          <Trash size={14} /> Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drafts Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Drafts</h2>
          <button
            onClick={handleCreateNew}
            className="flex items-center gap-2 bg-[#6938EF] text-white px-4 py-2 rounded-full text-sm hover:bg-[#7b54f5]"
          >
            + Create new
          </button>
        </div>

        {drafts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p>Start by creating your first reference form</p>
            <p className="text-sm mt-1">Hit “create new” to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {drafts.map((d) => (
              <div
                key={d.id}
                className="relative border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                {/* Status */}
                <span
                  className={`absolute top-2 right-2 px-2 py-[2px] rounded-full text-xs font-medium ${
                    d.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {d.status}
                </span>

                <p className="text-sm font-medium text-gray-800 mt-8">
                  {d.title}
                </p>
                <p className="text-xs text-gray-500">
                  Last updated {d.updated}
                </p>

                {/* Menu */}
                <div className="absolute bottom-3 right-3">
                  <button
                    onClick={() => handleMenuToggle(`draft-${d.id}`)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenu === `draft-${d.id}` && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 shadow-lg rounded-lg z-50">
                      <ul className="text-sm text-gray-700">
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleEdit(d.id, "draft")}
                        >
                          <Edit size={14} /> Edit
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleClone(d.id, "draft")}
                        >
                          <Copy size={14} /> Clone
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleRename(d.id, "draft")}
                        >
                          <Upload size={14} /> Rename
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                          onClick={() => handleTogglePublish(d.id, "draft")}
                        >
                          <Globe size={14} />{" "}
                          {d.status === "Published" ? "Unpublish" : "Publish"}
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-50 text-red-500 cursor-pointer flex items-center gap-2 border-t border-gray-100"
                          onClick={() => handleDelete(d.id, "draft")}
                        >
                          <Trash size={14} /> Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BusinessDrafts;
