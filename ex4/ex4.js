class Phone {
  constructor(code, name, manufacture, price) {
    this._code = code;
    this._name = name;
    this._manufacture = manufacture;
    this._price = price;
  }

  get code() {
    return this._code;
  }
  get name() {
    return this._name;
  }
  get manufacture() {
    return this._manufacture;
  }
  get price() {
    return this._price;
  }

  set code(code) {
    this._code = code;
  }
  set name(name) {
    this._name = name;
  }
  set manufacture(manufacture) {
    this._manufacture = manufacture;
  }
  set price(price) {
    this._price = price;
  }

  toString() {
    return `${this._code} ${this._name} ${this._manufacture} ${this._price} `;
  }
}

const phones = [];
const $ = (id) => document.getElementById(id);
const addPhone = (phone) => phones.push(phone);

const clearInput = () => {
  $('phoneCode').value = '';
  $('phoneName').value = '';
  $('phoneManufacture').value = '';
  $('phonePrice').value = '';
};

const builPhoneTable = () => {
  let code = `<table>`;
  code += `<tr>
            <th>Code</th>
            <th>Name</th>
            <th>Manufacture</th>
            <th>Price</th>
        </tr>`;
  for (let i = 0; i < phones.length; i++) {
    code += `<tr>
                <td>${phones[i]._code}</td>
                <td>${phones[i]._name}</td>
                <td>${phones[i]._manufacture}</td>
                <td>${phones[i]._price}</td>
                </tr>`;
  }

  code += `</table>`;

  return code;
};

const renderPhoneTable = () => {
  $('phoneTable').innerHTML = phones.length
    ? builPhoneTable()
    : `<p>List empty</p>`;
};

const main = () => renderPhoneTable();

const onClickAdd = () => {
  const code = $('phoneCode').value;
  const name = $('phoneName').value;
  const manufacture = $('phoneManufacture').value;
  const price = $('phonePrice').value;

  const newPhone = new Phone(code, name, manufacture, price);
  addPhone(newPhone);

  clearInput();
  renderPhoneTable();
};

const onClickSort = () => {
  phones.sort((a, b) => a._name > b._name);
  renderPhoneTable();
};
