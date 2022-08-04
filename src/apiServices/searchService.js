import * as request from "~/untils/request";

// encodeURIComponent(value): mã hóa value thành ký tự hợp lệ trên URL
// API được lấy từ fullstack.edu.vn
// Sử dụng thư viện Axios để gửi request API
export const search = async (q, type) => {
    try {
        const result = await request.get("users/search?", {
            params: {
                q,
                type,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};