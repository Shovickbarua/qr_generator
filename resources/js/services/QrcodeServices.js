import axios from "axios";

const QrcodeServices = {};

QrcodeServices.list = async params => {
    const urlList = "/api/qrcodes";
    const res = await axios.get(urlList, { params: params }).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    return res;
};


QrcodeServices.show = async (code) => {
    const url = "/api/get-qrcode/"+code;
    const res = await axios.get(url).then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
    return res;
};

QrcodeServices.save = async (data) => {
    let urlSave = "/api/qrcodes";
    let formdata = new FormData();
    Object.keys(data).map(key => {
        formdata.append(key, data[key]);
    });
    const res = await axios.post(urlSave, formdata).then(response => {
                // $.notify({ message: "Item Updated" }, { type: "success" });
                return response.data;
            }).catch(error => {
                return [];
            });
    return res;
}

export default QrcodeServices;