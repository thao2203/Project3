﻿using DTO_Data_Transfer_Object_;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL_Business_Logic_Layer_.ServiceInterface
{
    public interface IBaiViet
    {

        int Insert(baiViet bviet);
        int Delete(int bvietID);
        int Update(baiViet bviet);
        IList<baiViet> getBvTheoLoai(string maLoai);
        IList<baiViet> getPhanTrangBV(string maLoai,string pagesize);

        IList<baiViet> getThongTinBV();
        IList<baiViet> getBaiVietHot();
        IList<baiViet> getBaiVietMoiNhat();
        IList<baiViet> getBaiVietBanhNgot();
        IList<baiViet> getBaiVietHaNoi();
        BaiViet_bll getBaiViet_ID(int bvietID);
        int getBaiViet_ID_Last();
        int checkBaiViet_ID(int bvietID);
        IList<baiViet> Search(baiViet bviet);
    }
}