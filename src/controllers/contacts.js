// import { ContactsModel } from "../schema/contacts.schema.js";
import { ContactsSchema } from "../schema/contacts.schema.js";

export async function createContacts(req, res) {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res
      .status(500)
      .json({ data: null, status: false, message: "Empty request body!" });
  }
  try {
    const contactModel = new ContactsSchema({
      name,
      email,
      phone
    });
    const contactData = await contactModel.save();
    console.log(contactData);
    return res.status(201).json({
      data: contactData,
      status: true,
      message: "Contact created successfully!"
    });
  } catch (error) {
    return res
      .status(500)
      .json({ data: null, status: false, message: error.message });
  }
}

export async function getContacts(req, res) {
  try {
    const contactsData = await ContactsSchema.findAll();
    console.log(contactsData, "contactsData");
    return res.status(200).json({
      data: contactsData,
      status: true,
      message: "Contact fetched successfully!"
    });
  } catch (error) {
    return res
      .status(500)
      .json({ data: null, status: false, message: error.message });
  }
}
