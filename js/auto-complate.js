



let availableKeywords = [
    'Tangerang',
    'Jakarta Barat',
    'Jakarta Timur',
    'Jakarta Selatan',
    'Jakarta Timur Ke Barat',
    'Jakarta Selatan Ke Utara',
    'Tangerang - Banten',
    'Tangerang - Kota',
    'Tangerang - Selatan',
    'Tangerang - Barat',
  ];
  
  const searchBox = document.querySelector(".search-box");
  const inputBox = document.querySelector("#inputBox");
  const resultList = document.querySelector("#resultList"); // Select the ul element
  
  inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
  
    if (input.length) {
      result = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
  
      resultList.innerHTML = ""; // Clear the previous results
  
      if (result.length > 0) {
        searchBox.classList.remove("hidden");
  
        result.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.classList.add("py-3", "px-3", "lg:text-base", "md:text-sm", "text-xs", "cursor-pointer", "hover:bg-gray-200"); // Tambahkan kelas "hover:bg-gray-200" untuk efek hover

          listItem.textContent = item;
          listItem.onclick = function () {
            inputBox.value = item;
            searchBox.classList.add("hidden");
          };
          resultList.appendChild(listItem);
        });
      } else {
        searchBox.classList.remove("hidden"); // Show the search box
        resultList.innerHTML = "<li class='py-3 lg:text-base md:text-sm text-xs px-3'>Maaf, Outlet Tidak Tersedia</li>"; // Add the message directly
      }
    } else {
      searchBox.classList.add("hidden");
    }
  };