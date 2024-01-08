var vueInstance = new Vue({
    el:'#app',
    data: {
        title:"Áo thun basic unisex cotton 100% - màu đen - chodole",
        brand: "no brand",
        description: `Áo thun unisex cao cấp của Chodole. Chodole là hương hiệu quần áo nam, thời trang trẻ trung, với phong cách Bắc Âu đơn giản, không cầu kì nhưng vẫn mang lại một sự thanh lịch cho các bạn trẻ

        Form áo rộng rải thoải mái phù hợp cho cả các bạn nam, cũng như các bạn nữ. 
        Chất liệu cotton 100% định lượng 3.2m/ kg vải
        Mô tả sơ qua về form áo và chất liệu:
        
        - Áo thun unisex ( áo thun nam/ áo thun nữ) cao cấp tay ngắn, 
        
        - Chất liêu thun mềm mại, co giãn tốt, thoáng mát.
        
        - Thiết kế đơn giản
        
        - Áo được may kỉ càng, đường may chuẩn.
        
        Áo thun unisex thích hợp để mặc trong dịp gì?
        
        - Thích hợp để kết hợp với quần jeans, quần short hoặc khaki.`,
        price: 15000,
        color:"",
        colors:['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
        url: "https://dosi-in.com/images/detailed/42/CDL10_1.jpg"
    },
    methods:{
        sayHello: function(){
            this.hello = "Hello VueJs";
        },
        pickColor: function(color){
            this.color = color;
        }
    },
    computed: {
        formatMoney: function(){
            return Intl.NumberFormat('vi-VN',{style:'currency', currency:'VND'}).format(this.price);
        }
    }
})