import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      {filteredList.map((item, index) => (
        <ContactItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ContactList;
