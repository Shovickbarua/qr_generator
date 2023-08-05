import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import { QR_TYPE } from "./constants";

export const formatQrTableData = (qrs, showModal) => {
    let allDatas = [];
    const viewProfile = (uuid) => {
      window.location.href = "/fq/"+uuid;
    }

    qrs?.map(qr=>{
        const row = {
            key: "1",
            name: (
              <div onClick={()=>showModal(qr.qr_image_url)}>
                <Avatar.Group>
                  <Avatar
                    className="shape-avatar"
                    shape="square"
                    size={40}
                    src={qr.qr_image_url}
                  ></Avatar>
                  <div className="avatar-info">
                    <p>{qr.type}</p>
                    <h2>{qr.name}</h2>
                    {(qr.type === QR_TYPE.COMPANY_PROFILE || qr.type === QR_TYPE.PERSONAL_PROFILE) ?  <span className="cursor-pointer hover:text-blue-300" onClick={()=>viewProfile(qr.uuid)}>View Profile</span>: <p>{qr.qr_info}</p>}
                  </div>
                </Avatar.Group>{" "}
              </div>
            ),
            status: (
              <>
                0 Scan
              </>
            ),
            employed: (
              <>
                <div className="ant-employed">
                  <span>created at {formatDate(qr.created_at)}</span>
                  <a className="mx-6" onClick={()=>showModal(qr.qr_image_url)}>View</a>
                  <a className="mx-6" href={`/account/my-qrcodes/qrcontent/${qr.id}`}>Edit</a>
                  <a download href={qr.qr_image_url} className="">
                    download
                  </a>
                </div>
              </>
            ),
        }
        allDatas.push(row)
    })
    return allDatas;
}

export const formatDate = (date, separator=' ') => {
  if (!date) return '';
  Date.prototype.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  Date.prototype.monthNumber = ["01", "02", "03", "04", "05", "06","07", "08", "09", "10", "11", "12"];
  Date.prototype.getMonthName = function () {
    return this.monthNames[this.getMonth()];
  };
  Date.prototype.getMonthNumber = function() {
    return this.monthNumber[this.getMonth()];
  };
  
  var formStr = date.replace(/ /g,"T");
  var date = new Date(formStr);
  const monthNumber = date.getMonthNumber();
  let day = date.getDate();
  const monthName = date.getMonthName();
  let year = date.getFullYear();
  year = year == 121 ? 21 : year;
  day = day < 10 ? "0"+day : day;
  let res = day + separator + monthName + separator + year;
  if (separator === '-') res = year+'-'+monthNumber+'-'+day;
  return res;
}

export const slugify = str =>(str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
);