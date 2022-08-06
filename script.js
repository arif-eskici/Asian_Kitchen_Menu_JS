const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
      id: 10,
      title: "Karnıyarık",
      category: "Turkey",
      price: 6.99,
      img: 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Karn%C4%B1yar%C4%B1k_-_Lunch_at_Yanyali_Fehmi_Lokantasi_%286421044715%29.jpg/375px-Karn%C4%B1yar%C4%B1k_-_Lunch_at_Yanyali_Fehmi_Lokantasi_%286421044715%29.jpg",
      desc: `Ana malzemesi patlıcan olan, soğan ve sarımsak kullanılarak hazırlanan zeytinyağlı bir yemek türüdür.`,
    },
    {
      id: 11,
      title: "Yaprak Sarması",
      category: "Turkey",
      price: 5.99,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sarma.jpg/330px-Sarma.jpg",
        desc: `Asma yaprağının içerisine bulgur ya da pirinç başta olmak üzere yöresine göre değişen diğer iç malzemeleri konarak yapılan bir yemektir.`,
    },
    {
      id: 12,
      title: "Adana Kebabı",
      category: "Turkey",
      price: 11.99,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Adana_kebab.jpg/180px-Adana_kebab.jpg",
        desc: ` Adana'ya özgü, "zırh" adı verilen, satıra benzer bir bıçak ile elde kıyılan parça etten yapılan Türk mutfağında bir kebap türüdür.`,
    },
  ];

  const btnContainer = document.querySelector(".btn-container")
  const Section = document.querySelector(".section-center")

  let newCategories = menu.map(function (e) {
    return e.category
  })

  // butonların olacağı array tanımlandı.
  let cleanMenu = ["All", ...new Set(newCategories)]

  // createElement metodu ile menü butonları oluşturuldu.
  cleanMenu.forEach(value => {
    let button = document.createElement("button")
    button.classList.add("btn", "btn-outline-dark", "btn-item")
    button.setAttribute("data-id", value)
    button.addEventListener("click", buttonClick)
    button.innerHTML = (value)
    btnContainer.append(button)
  })

  // Butonlara tıklandığında yapılacak işlemler tanımlandı.
  function buttonClick() {
    const result = this.getAttribute("data-id") == "All" ? menu : menu.filter((e) => {
      return e.category == this.getAttribute("data-id")
    })
    list(result)
  }

  // Template literals metoduyla menü ögeleri oluşturuldu.
  function list(show) {
    Section.innerHTML = "";
    for (let i in show) {
      let singleItem = document.createElement("div")
      singleItem.classList.add("col-lg-6", "col-sm-12", "menu-items")

      singleItem.innerHTML = 
        `
          <img src="${show[i].img}" class="photo"/>
          <div class="menu-info">
            <div class="menu-title">
              <h4>${show[i].title}</h4>
              <h4 class="price">${show[i].price}</h4>
            </div>
            <div class="menu-text">
              ${show[i].desc}
            </div>
          </div>
        `
        
      Section.append(singleItem)
    }
  }

  // Başlangıçta tüm menüyü göstermek için gerekli.
  list(menu);