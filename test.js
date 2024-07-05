const locations = {
    1: {
        position: { lat:23.711157, lng:120.5731706 },
        title: "23.711157,120.5731706",
        color: "#ff0000", // 預設顏色
        content: {
            "2024/04/21": {
                description: "1024袋",
                color: "#FFFF00",
                images: [
                    "picture/點12-13.jpeg",
                    "picture/點12-13 (1).jpeg",
                    "picture/點12-13 (2).jpeg",
                    "picture/點12-13 (3).jpeg",
                    "picture/點12-13 (4).jpeg"
                ]
            },
            "2022/05/29": {
                description: "1024袋",
                color: "#FFFF00",
                images: [
                    "picture/點12-13.jpeg",
                    "picture/點12-13 (1).jpeg",
                    
                ]
            }
            // 未來可以在這裡添加更多年份的數據
        }
    },
    2: {
        position: { lat:24.711157, lng:121.5731706 },
        title: "23.711157,120.5731706",
        color: "#ff0000", // 預設顏色
        content: {
            "2024/04/21": {
                description: "1024袋",
                color: "#FF0000",
                images: [
                    "picture/點12-13.jpeg",
                    "picture/點12-13 (1).jpeg",
                    
                ]
            },
            "2022/04/06": {
                description: "1024袋",
                color: "#FFFF00",
                images: [
                    "picture/點12-13.jpeg",
                    "picture/點12-13 (1).jpeg",
                    "picture/點12-13 (4).jpeg"
                ]
            }
            // 未來可以在這裡添加更多年份的數據
        }
    },
    
};
let map;
let currentYear = '2024';
let isTimelineMode = false;
