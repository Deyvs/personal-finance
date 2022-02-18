// const model = {
//     description: "Compras mercado",
//     price: 400.00,
//     category: "food | sports | hobby",
//     paymentType: "credit card | debit card | pix",
//     operationType: "credit | debit"
// }

let BD = [];

// CRUD

// Create
function create(operation) {
    const nextId = BD.length + 1;
    const newData = { ...operation, id: nextId};
    BD.push(newData);
    return newData;
}

// Read
function readAll() {
    return BD;
}

function readById(id) {
    return BD.filter(document => document.id === id);
}

// Delete
function deleteById(id) {
    const remainingDocuments = BD.filter(document => document.id !== id);
    const deletedDocument = BD.filter(document => document.id === id);
    BD = [...remainingDocuments];
    return deletedDocument;
}

// Update
function updateById(newDoc) {
    const documentToUpdate = BD.filter(document => document.id === newDoc.id);

    if (documentToUpdate.length > 0) {
        BD = BD.map(document => {
            if (document.id === documentToUpdate[0].id) {
                document = newDoc;
            }
            return document;
        })
        return newDoc;
    }

    return [];
}

module.exports = {
    create,
    readAll,
    readById,
    deleteById,
    updateById
}