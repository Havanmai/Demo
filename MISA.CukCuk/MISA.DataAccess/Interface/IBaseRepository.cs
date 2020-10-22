using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.DataAccess.Interface
{
    public interface IBaseRepository<T>
    {
        /// <summary>
        /// Lấy dữ liệu
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: HVM (17/10/2020)
        IEnumerable<T> Get();
        /// <summary>
        /// Lấy dữ liệu theo Id
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: HVM (17/10/2020)
        T GetById(Guid objectId);
        /// <summary>
        /// Thêm dữ liệu
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: HVM (17/10/2020)
        int Insert(T entity);
        /// <summary>
        /// Sửa dữ liệu  theo Id
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: HVM (17/10/2020)
        int Update(T entity, Guid id);
        /// <summary>
        /// Xóa dữ liệu  theo Id
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: HVM (17/10/2020)
        int Delete(Guid id);
        /// <summary>
        /// lấy dữ liệu  theo Code
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: HVM (17/10/2020)
        string GetbyCode();
        

    }
}
