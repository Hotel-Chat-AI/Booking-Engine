        // --- Luxury Theme JavaScript ---
        let currentVisiblePageLuxury = 'home-luxury';
        let searchCriteriaLuxury = { checkin: null, checkout: null, nights: 1, guests: 2 };
        let selectedRoomForCheckoutLuxury = null;

        const heroLuxuryImages = [
            'https://www.roumeihotel.com.tw/assets/images/roumei-boutique-1.jpg',
            'https://www.roumeihotel.com.tw/assets/images/beauty_hotels_taipei_roumei_hotel_home_banner_lobby.jpg',
            'https://www.roumeihotel.com.tw/assets/images/roumei-boutique-hall.jpg',
            'https://www.roumeihotel.com.tw/assets/images/roumei-boutique-hotel-business-center.jpg',
            'https://www.roumeihotel.com.tw/assets/images/excise.jpg'
        ];
        let currentHeroLuxuryImageIndex = 0;
        const heroBgLuxuryElement = document.querySelector('.hero-bg-luxury');

        function rotateHeroLuxuryImages() {
            if (!heroBgLuxuryElement) return;
            currentHeroLuxuryImageIndex = (currentHeroLuxuryImageIndex + 1) % heroLuxuryImages.length;
            heroBgLuxuryElement.style.backgroundImage = `url('${heroLuxuryImages[currentHeroLuxuryImageIndex]}')`;
        }

        const translations = {
            en: {
                // Header
                nav_home: "Home",
                nav_rooms: "Rooms",
                nav_contact: "Contact",
                nav_book_now: "Book Now",
                nav_book_a_room: "Book a Room",
                // Hero
                hero_welcome: "Welcome to Roumei Hotel Taipei",
                hero_reserve_stay: "Reserve Your Stay",
                hero_arrival: "Arrival",
                hero_departure: "Departure",
                hero_guests: "Guests",
                hero_check_availability: "Check Availability",
                // Accommodations section
                accom_title: "Our Accommodations",
                accom_explore_room: "Explore Room",
                // Rooms List section
                rooms_list_available_rooms: "Available Rooms",
                rooms_list_showing_availability: "Showing availability for your selected dates.",
                rooms_list_details_reserve: "Details & Reserve",
                rooms_list_no_rooms: "No Rooms Available",
                rooms_list_no_rooms_desc: "We\'re sorry, no rooms match your criteria for the selected dates. Please try alternative dates.",
                // Room Detail
                room_detail_back_to_rooms: "Back to Rooms",
                room_detail_key_features: "Key Features:",
                room_detail_reserve_this_room: "Reserve This Room",
                // Booking Form
                booking_form_back_to_details: "Back to Room Details",
                booking_form_complete_reservation: "Complete Your Reservation",
                booking_form_your_selection: "Your Selection:",
                booking_form_guest_details: "Guest Details",
                booking_form_first_name: "First Name",
                booking_form_last_name: "Last Name",
                booking_form_email: "Email Address",
                booking_form_phone: "Phone Number",
                booking_form_payment_mock: "Payment (Mock)",
                booking_form_name_on_card: "Name on Card",
                booking_form_card_number: "Card Number",
                booking_form_expiry: "Expiry (MM/YY)",
                booking_form_cvv: "CVV",
                booking_form_accept_policy: "I acknowledge and agree to the {booking_conditions} and {privacy_policy}.",
                booking_form_booking_conditions: "booking conditions",
                booking_form_privacy_policy: "privacy policy",
                booking_form_confirm_reservation: "Confirm Reservation",
                // Confirmation Modal
                conf_modal_confirmed: "Reservation Confirmed",
                conf_modal_thank_you: "Thank you, {guest_name}, your stay at Roumei Hotel Taipei is confirmed.",
                conf_modal_email_sent: "A confirmation has been sent to {guest_email}.",
                conf_modal_booking_id: "Booking ID:",
                conf_modal_your_stay: "Your Stay:",
                conf_modal_return_home: "Return Home",
                // Footer
                footer_contact_title: "Roumei Hotel Taipei",
                footer_address: "No. 2, Jianguo N Rd, Sec 2, Taipei, Taiwan (Example Address)",
                footer_phone: "Phone: +886 2 2503 1133 (Example Phone)",
                footer_email: "Email: reservations@roumeihotel.com.tw (Example Email)",
                // General
                max_guests: "Max Guests",
                bed_type: "Bed Type",
                per_night_for_dates: "per night for selected dates",
                per_night: "night",
                total_price: "Total",
                for_nights_before: "for",
                night_singular: "night",
                nights_plural: "nights",
                // Room specific (add for each room as needed)
                room_id_superior_name: "高級客房 (Superior Room)",
                room_id_superior_description_short: "Cozy comfort with elegant touches, perfect for a relaxing stay. Features a plush double bed and a single-size bathtub.",
                room_id_superior_description_full: "Cozy comfort with elegant touches, perfect for a relaxing stay. Features a plush double bed, a modern en-suite bathroom with a single-size bathtub, complimentary high-speed WiFi, air conditioning, an LCD TV with international channels, and a mini fridge. Perfect for solo travelers or couples.",
                room_id_superior_description_short_home: "Cozy comfort with elegant touches, perfect for a relaxing stay.",
                room_id_superior_bed_type: "1 Double Bed",
                room_id_superior_alt: "Superior Room Image",
                room_id_deluxe_name: "豪華客房 (Deluxe Room)",
                room_id_deluxe_description_short_home: "Spacious and refined, offering an elevated level of comfort and style.",
                room_id_executive_name: "行政商務客房 (Executive Business Room)",
                room_id_executive_description_short_home: "Ideal for the discerning traveler, with premium amenities and ample workspace.",
                room_id_triple_name: "行政商務三人房 (Executive Triple)",
                // Amenities (add as needed, ensure keys match JS processing: lowercase, underscore for space)
                amenity_single_size_bathtub: "Single-size Bathtub",
                amenity_free_wifi: "Free WiFi",
                amenity_air_conditioning: "Air Conditioning",
                amenity_lcd_tv: "LCD TV",
                amenity_mini_fridge: "Mini Fridge",
                amenity_work_desk: "Work Desk",
                amenity_enhanced_toiletries: "Enhanced Toiletries",
                amenity_double_size_bathtub: "Double-size Bathtub",
                amenity_large_lcd_tv: "Large LCD TV",
                amenity_mini_bar: "Mini Bar",
                amenity_premium_toiletries: "Premium Toiletries",
                amenity_sofa_area: "Sofa Area",
                amenity_coffee_tea_maker: "Coffee/Tea Maker",

                hero_tagline: "Discover boutique elegance and serene comfort in the heart of the city.",
                room_price_from: "From NT$"

            },
            'zh-TW': {
                // Header
                nav_home: "首頁",
                nav_rooms: "客房介紹",
                nav_contact: "聯絡我們",
                nav_book_now: "立即預訂",
                nav_book_a_room: "預訂客房",
                // Hero
                hero_welcome: "台北柔美精品商旅歡迎您",
                hero_reserve_stay: "預訂您的住宿",
                hero_arrival: "入住日期",
                hero_departure: "退房日期",
                hero_guests: "入住人數",
                hero_check_availability: "查詢空房",
                // Accommodations section
                accom_title: "我們的房型",
                accom_explore_room: "探索客房",
                // Rooms List section
                rooms_list_available_rooms: "可預訂客房",
                rooms_list_showing_availability: "顯示您所選日期的空房情況。",
                rooms_list_details_reserve: "查看詳情與預訂",
                rooms_list_no_rooms: "目前沒有空房",
                rooms_list_no_rooms_desc: "對不起，您所選的日期已無空房。請嘗試其他日期。",
                // Room Detail
                room_detail_back_to_rooms: "返回客房列表",
                room_detail_key_features: "主要設施：",
                room_detail_reserve_this_room: "預訂此客房",
                // Booking Form
                booking_form_back_to_details: "返回客房詳情",
                booking_form_complete_reservation: "完成您的預訂",
                booking_form_your_selection: "您的選擇：",
                booking_form_guest_details: "住客資料",
                booking_form_first_name: "名字",
                booking_form_last_name: "姓氏",
                booking_form_email: "電子郵件",
                booking_form_phone: "電話號碼",
                booking_form_payment_mock: "付款資訊 (模擬)",
                booking_form_name_on_card: "持卡人姓名",
                booking_form_card_number: "信用卡號碼",
                booking_form_expiry: "有效期限 (MM/YY)",
                booking_form_cvv: "安全碼 (CVV)",
                booking_form_accept_policy: "我已閱讀並同意 {booking_conditions} 和 {privacy_policy}。",
                booking_form_booking_conditions: "預訂條款",
                booking_form_privacy_policy: "隱私政策",
                booking_form_confirm_reservation: "確認預訂",
                // Confirmation Modal
                conf_modal_confirmed: "預訂已確認",
                conf_modal_thank_you: "謝謝您，{guest_name}，您在台北柔美精品商旅的住宿已確認。",
                conf_modal_email_sent: "確認郵件已發送至 {guest_email}。",
                conf_modal_booking_id: "預訂編號：",
                conf_modal_your_stay: "您的住宿：",
                conf_modal_return_home: "返回首頁",
                // Footer
                footer_contact_title: "台北柔美精品商旅",
                footer_address: "台灣台北市建國北路二段2號 (範例地址)",
                footer_phone: "電話：+886 2 2503 1133 (範例電話)",
                footer_email: "電子郵件：reservations@roumeihotel.com.tw (範例電郵)",
                 // General
                max_guests: "最多入住",
                bed_type: "床型",
                per_night_for_dates: "每晚價格 (所選日期)",
                per_night: "晚",
                total_price: "總計",
                for_nights_before: "", // In Chinese, "for X nights" might be "X 晚" directly as part of total.
                night_singular: "晚",
                nights_plural: "晚",
                // Room specific
                room_id_superior_name: "高級客房",
                room_id_superior_description_short: "溫馨舒適，設計典雅，為您提供完美的休憩之選。配備舒適雙人床和單人浴缸。",
                room_id_superior_description_full: "溫馨舒適，設計典雅，為您提供完美的休憩之選。房内設有一張舒適雙人床、現代化衛浴設備（含單人浴缸）、免費高速無線網路、空調、液晶電視（國際頻道）及迷你冰箱。適合單人旅客或情侶入住。",
                room_id_superior_description_short_home: "溫馨舒適，設計典雅，為您提供完美的休憩之選。",
                room_id_superior_bed_type: "1張雙人床",
                room_id_superior_alt: "高級客房圖片",
                room_id_deluxe_name: "豪華客房",
                room_id_deluxe_description_short_home: "寬敞精緻，提供更高層次的舒適與格調。",
                room_id_executive_name: "行政商務客房",
                room_id_executive_description_short_home: "為品味卓越的旅客而設，提供高級設施及充足工作空間。",
                room_id_triple_name: "行政商務三人房",

                // Amenities
                amenity_single_size_bathtub: "單人浴缸",
                amenity_free_wifi: "免費無線網路",
                amenity_air_conditioning: "空調",
                amenity_lcd_tv: "液晶電視",
                amenity_mini_fridge: "迷你冰箱",
                amenity_work_desk: "辦公桌",
                amenity_enhanced_toiletries: "升級盥洗用品",
                amenity_double_size_bathtub: "雙人浴缸",
                amenity_large_lcd_tv: "大型液晶電視",
                amenity_mini_bar: "迷你吧",
                amenity_premium_toiletries: "高級盥洗用品",
                amenity_sofa_area: "沙發區",
                amenity_coffee_tea_maker: "咖啡/茶沖泡設備",

                hero_tagline: "在市中心發現精品般的優雅與寧靜舒適。",
                room_price_from: "NT$ 起"
            }
            // Add other languages here: ja, ko, zh-CN
        };
        let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

        function setLanguage(lang) {
            if (!translations[lang]) {
                console.warn(`Language "${lang}" not found in translations. Defaulting to English.`);
                lang = 'en';
            }
            currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);
            if(currentLangDisplay) currentLangDisplay.textContent = langDropdown.querySelector(`a[data-lang="${lang}"]`).textContent;

            document.querySelectorAll('[data-translate-key]').forEach(element => {
                const key = element.getAttribute('data-translate-key');
                let translatedText = translations[lang][key] || translations['en'][key] || element.textContent; // Fallback

                // Handle placeholders like {placeholder_name}
                if (translatedText && translatedText.includes('{')) {
                    if (key === 'booking_form_accept_policy') {
                        const bookingConditionsLink = `<a href="#" class="text-accent-gold hover:underline" data-translate-key="booking_form_booking_conditions">${translations[lang]['booking_form_booking_conditions'] || translations['en']['booking_form_booking_conditions']}</a>`;
                        const privacyPolicyLink = `<a href="#" class="text-accent-gold hover:underline" data-translate-key="booking_form_privacy_policy">${translations[lang]['booking_form_privacy_policy'] || translations['en']['booking_form_privacy_policy']}</a>`;
                        translatedText = translatedText.replace('{booking_conditions}', bookingConditionsLink).replace('{privacy_policy}', privacyPolicyLink);
                        element.innerHTML = translatedText; // Use innerHTML for links
                    } else {
                         // For other placeholders, if any, this simple replacement can be expanded
                        // For now, we just set textContent if no special handling is needed
                        element.textContent = translatedText;
                    }
                } else {
                    element.textContent = translatedText;
                }

                // Special handling for input placeholders or values if needed
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder') && translations[lang][key + '_placeholder']) {
                    element.placeholder = translations[lang][key + '_placeholder'] || translations['en'][key + '_placeholder'];
                }
            });

            // Update search dates info specifically as it's dynamically generated
            const searchDatesInfoLuxury = document.getElementById('search-dates-info-luxury');
            if (searchDatesInfoLuxury && searchCriteriaLuxury.checkin && searchCriteriaLuxury.checkout) {
                 if (lang === 'zh-TW') {
                    searchDatesInfoLuxury.textContent = `顯示從 ${formatDateLuxury(searchCriteriaLuxury.checkin, 'zh-TW')} 到 ${formatDateLuxury(searchCriteriaLuxury.checkout, 'zh-TW')}，${searchCriteriaLuxury.guests} 位貴賓的空房情況。`;
                } else { // Default to English or other languages
                    searchDatesInfoLuxury.textContent = `Showing availability from ${formatDateLuxury(searchCriteriaLuxury.checkin, 'en-US')} to ${formatDateLuxury(searchCriteriaLuxury.checkout, 'en-US')} for ${searchCriteriaLuxury.guests} guest(s).`;
                }
            }
             // Update room prices on the home page (featured rooms)
            updateFeaturedRoomPrices();
            // If on rooms list page, re-populate to apply language to dynamic content
            if (currentVisiblePageLuxury === 'roomsList-luxury') {
                populateLuxuryRoomListings();
            }
            // If on room detail page, re-populate to apply language to dynamic content
            if (currentVisiblePageLuxury === 'roomDetail-luxury' && selectedRoomForCheckoutLuxury) {
                 showRoomDetailLuxury(selectedRoomForCheckoutLuxury.id); // This will re-render with current lang
            }
        }

        function updateFeaturedRoomPrices() {
            document.querySelectorAll('#accommodations-luxury .featured-room-card-luxury').forEach((card, index) => {
                const roomData = mockRoumeiRoomsData[index]; 
                if (!roomData) return;

                // Handle room name translation if it's static on the card (already done by data-translate-key if present)
                // const titleElement = card.querySelector('h3[data-translate-key]');
                // if (titleElement) { /* setLanguage handles this */ }

                // Handle "Explore Room" button text
                const exploreButton = card.querySelector('button');
                if (exploreButton) {
                    const exploreKey = exploreButton.getAttribute('data-translate-key');
                    if (exploreKey) {
                         exploreButton.textContent = translations[currentLanguage][exploreKey] || translations['en'][exploreKey] || exploreButton.textContent;
                    }
                }

                // Handle Price Display: "From NT$ {price}"
                const priceElement = card.querySelector('.featured-room-card-content-luxury .mt-auto p.text-lg.font-bold');
                if (priceElement) {
                    const priceTemplateKey = 'text_room_price_from_template';
                    let translatedPattern = translations[currentLanguage][priceTemplateKey] || translations['en'][priceTemplateKey];
                    if (translatedPattern) {
                        priceElement.textContent = translatedPattern.replace('{price}', roomData.price.toLocaleString());
                    } else {
                        // Fallback if template is missing for some reason
                        priceElement.textContent = `NT$ ${roomData.price.toLocaleString()}`;
                    }
                }
            });
        }

        const mockRoumeiRoomsData = [
            { 
                id: 'superior', 
                name: '高級客房 (Superior Room)', // This can be a fallback or key for dynamic lookup too
                description: 'Cozy comfort with elegant touches, perfect for a relaxing stay. Features a plush double bed and a single-size bathtub.', // Fallback full description
                price: 2266, 
                guests: 2, 
                bed: '1 Double Bed', // Fallback bed type
                amenities: ['Single-size Bathtub', 'Free WiFi', 'Air Conditioning', 'LCD TV', 'Mini Fridge'],
                image: 'https://www.roumeihotel.com/assets/images/Superior-2.jpg'
            },
            { 
                id: 'deluxe', 
                name: '豪華客房 (Deluxe Room)', 
                description: 'Spacious and refined, offering an elevated level of comfort and style with a single-size bathtub.',
                price: 2530, 
                guests: 2, 
                bed: '1 Double Bed',
                amenities: ['Single-size Bathtub', 'Free WiFi', 'Air Conditioning', 'Work Desk', 'Enhanced Toiletries'],
                image: 'https://www.roumeihotel.com/assets/images/luxury-3.jpg' 
            },
            { 
                id: 'executive', 
                name: '行政商務客房 (Executive Business Room)', 
                description: 'Ideal for the discerning traveler, with premium amenities, a double-size bathtub, and ample workspace.',
                price: 2965, 
                guests: 2, 
                bed: '1 King Bed',
                amenities: ['Double-size Bathtub', 'Free WiFi', 'Large LCD TV', 'Mini Bar', 'Premium Toiletries'],
                image: 'https://www.roumeihotel.com/assets/images/Executive-3.jpg' 
            },
            { 
                id: 'triple', 
                name: '行政商務三人房 (Executive Triple)', 
                description: 'Perfect for small families or groups, offering ample space with one large and one small bed, and a double-size bathtub.',
                price: 3645, 
                guests: 3, 
                bed: '1 Large Bed + 1 Small Bed',
                amenities: ['Double-size Bathtub', 'Free WiFi', 'Sofa Area', 'Coffee/Tea Maker'],
                image: 'https://www.roumeihotel.com.tw/assets/images/roumei-boutique-hotel-business-center.jpg'
            }
        ];
        
        const luxuryPages = {
            'home-luxury': document.getElementById('home-luxury'),
            'roomsList-luxury': document.getElementById('roomsList-luxury'),
            'roomDetail-luxury': document.getElementById('roomDetail-luxury'),
            'bookingForm-luxury': document.getElementById('bookingForm-luxury')
        };
        const luxuryConfirmationModal = document.getElementById('confirmationModal-luxury');
        const luxuryBookingForm = document.getElementById('booking-form-luxury');
        const luxuryCheckinDateInput = document.getElementById('checkin-date-luxury');
        const luxuryCheckoutDateInput = document.getElementById('checkout-date-luxury');
        
        const luxuryDatePickerModal = document.getElementById('date-picker-modal');
        const luxuryCloseDatePickerBtn = luxuryDatePickerModal.querySelector('#close-date-picker');
        const luxuryPrevMonthBtn = luxuryDatePickerModal.querySelector('#prev-month-btn');
        const luxuryNextMonthBtn = luxuryDatePickerModal.querySelector('#next-month-btn');
        const luxuryMonthYearDisplay1 = luxuryDatePickerModal.querySelector('#month-year-display1');
        const luxuryMonthYearDisplay2 = luxuryDatePickerModal.querySelector('#month-year-display2');
        const luxuryCalendarGrid1 = luxuryDatePickerModal.querySelector('#calendar-grid1');
        const luxuryCalendarGrid2 = luxuryDatePickerModal.querySelector('#calendar-grid2');
        const luxuryDatePickerDoneBtn = luxuryDatePickerModal.querySelector('#date-picker-done-btn');
        
        let luxuryCurrentMonth1 = new Date().getMonth();
        let luxuryCurrentYear1 = new Date().getFullYear();
        let luxurySelectedCheckin = null;
        let luxurySelectedCheckout = null;

        function showPageLuxury(pageId) {
            Object.values(luxuryPages).forEach(page => { if(page) page.classList.add('hidden'); });
            if (luxuryPages[pageId]) {
                luxuryPages[pageId].classList.remove('hidden');
                currentVisiblePageLuxury = pageId;
                window.scrollTo(0, 0); 
            } else {
                // This part handles scrolling to sections within the home-luxury page
                const targetElement = document.getElementById(pageId);
                if (targetElement && luxuryPages['home-luxury']) {
                    luxuryPages['home-luxury'].classList.remove('hidden'); // Ensure home is visible
                    currentVisiblePageLuxury = 'home-luxury'; // Update current page state
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        function scrollToSectionLuxury(sectionId) {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                // If not already on home, switch to home then scroll
                if (currentVisiblePageLuxury !== 'home-luxury' && luxuryPages['home-luxury']) {
                     Object.values(luxuryPages).forEach(page => { if(page) page.classList.add('hidden'); });
                     luxuryPages['home-luxury'].classList.remove('hidden');
                     currentVisiblePageLuxury = 'home-luxury';
                     // Give the browser a moment to render the home page before scrolling
                     setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }, 50); // Reduced timeout
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            closeMobileMenuLuxury(); 
        }
        
        const mobileMenuLuxury = document.getElementById('mobile-menu-luxury');
        const mobileMenuButtonLuxury = document.getElementById('mobile-menu-button-luxury');
        const mobileMenuCloseLuxury = document.getElementById('mobile-menu-close-luxury');

        function openMobileMenuLuxury() { if (mobileMenuLuxury) mobileMenuLuxury.classList.add('open'); }
        function closeMobileMenuLuxury() { if (mobileMenuLuxury) mobileMenuLuxury.classList.remove('open'); }
        if (mobileMenuButtonLuxury) mobileMenuButtonLuxury.addEventListener('click', openMobileMenuLuxury);
        if (mobileMenuCloseLuxury) mobileMenuCloseLuxury.addEventListener('click', closeMobileMenuLuxury);

        function renderLuxuryCalendar(month, year, gridElement, displayElement) {
            if (!gridElement || !displayElement) return;
            gridElement.innerHTML = ''; 
            displayElement.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
            const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; 
            const headerRow = document.createElement('div');
            headerRow.className = 'grid grid-cols-7 text-center text-xs text-gray-400 mb-2';
            daysOfWeek.forEach(day => {
                const dayEl = document.createElement('div'); dayEl.textContent = day; headerRow.appendChild(dayEl);
            });
            gridElement.appendChild(headerRow);
            const daysGrid = document.createElement('div'); daysGrid.className = 'grid grid-cols-7 text-center text-sm';
            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date(); today.setHours(0,0,0,0);
            for (let i = 0; i < firstDayOfMonth; i++) { daysGrid.appendChild(document.createElement('div')); }
            for (let day = 1; day <= daysInMonth; day++) {
                const dayEl = document.createElement('div'); dayEl.textContent = day;
                dayEl.className = 'calendar-day p-2 rounded-full cursor-pointer';
                const currentDate = new Date(year, month, day);
                if (currentDate < today) { dayEl.classList.add('disabled', 'text-gray-600'); } 
                else { dayEl.addEventListener('click', () => handleLuxuryDateClick(currentDate)); }
                if (luxurySelectedCheckin && currentDate.getTime() === luxurySelectedCheckin.getTime()) dayEl.classList.add('selected-start');
                if (luxurySelectedCheckout && currentDate.getTime() === luxurySelectedCheckout.getTime()) dayEl.classList.add('selected-end');
                if (luxurySelectedCheckin && luxurySelectedCheckout && currentDate > luxurySelectedCheckin && currentDate < luxurySelectedCheckout) dayEl.classList.add('in-range');
                if (currentDate.getTime() === today.getTime()) dayEl.classList.add('today');
                daysGrid.appendChild(dayEl);
            }
            gridElement.appendChild(daysGrid);
        }
        function handleLuxuryDateClick(date) {
            if (!luxurySelectedCheckin || (luxurySelectedCheckin && luxurySelectedCheckout)) {
                luxurySelectedCheckin = date; luxurySelectedCheckout = null;
            } else if (date < luxurySelectedCheckin) { luxurySelectedCheckin = date; } 
            else { luxurySelectedCheckout = date; }
            renderAllLuxuryCalendars();
        }
        function renderAllLuxuryCalendars() {
            renderLuxuryCalendar(luxuryCurrentMonth1, luxuryCurrentYear1, luxuryCalendarGrid1, luxuryMonthYearDisplay1);
            let luxuryCurrentMonth2 = luxuryCurrentMonth1 + 1;
            let luxuryCurrentYear2 = luxuryCurrentYear1;
            if (luxuryCurrentMonth2 > 11) { luxuryCurrentMonth2 = 0; luxuryCurrentYear2++; }
            renderLuxuryCalendar(luxuryCurrentMonth2, luxuryCurrentYear2, luxuryCalendarGrid2, luxuryMonthYearDisplay2);
        }
        if(luxuryPrevMonthBtn) luxuryPrevMonthBtn.addEventListener('click', () => {
            luxuryCurrentMonth1--; if (luxuryCurrentMonth1 < 0) { luxuryCurrentMonth1 = 11; luxuryCurrentYear1--; } renderAllLuxuryCalendars();
        });
        if(luxuryNextMonthBtn) luxuryNextMonthBtn.addEventListener('click', () => {
            luxuryCurrentMonth1++; if (luxuryCurrentMonth1 > 11) { luxuryCurrentMonth1 = 0; luxuryCurrentYear1++; } renderAllLuxuryCalendars();
        });
        function openLuxuryDatePicker() {
            luxurySelectedCheckin = searchCriteriaLuxury.checkin ? new Date(searchCriteriaLuxury.checkin) : null;
            luxurySelectedCheckout = searchCriteriaLuxury.checkout ? new Date(searchCriteriaLuxury.checkout) : null;
            const todayForCalendar = new Date();
            luxuryCurrentMonth1 = luxurySelectedCheckin ? luxurySelectedCheckin.getMonth() : todayForCalendar.getMonth();
            luxuryCurrentYear1 = luxurySelectedCheckin ? luxurySelectedCheckin.getFullYear() : todayForCalendar.getFullYear();
            renderAllLuxuryCalendars();
            if(luxuryDatePickerModal) luxuryDatePickerModal.style.display = 'flex';
        }
        if(luxuryCheckinDateInput) luxuryCheckinDateInput.addEventListener('click', openLuxuryDatePicker);
        if(luxuryCheckoutDateInput) luxuryCheckoutDateInput.addEventListener('click', openLuxuryDatePicker);
        if(luxuryCloseDatePickerBtn) luxuryCloseDatePickerBtn.addEventListener('click', () => luxuryDatePickerModal.style.display = 'none');
        if(luxuryDatePickerDoneBtn) luxuryDatePickerDoneBtn.addEventListener('click', () => {
            if (luxurySelectedCheckin && luxurySelectedCheckout && luxurySelectedCheckout > luxurySelectedCheckin) {
                searchCriteriaLuxury.checkin = luxurySelectedCheckin.toISOString().split('T')[0];
                searchCriteriaLuxury.checkout = luxurySelectedCheckout.toISOString().split('T')[0];
                const oneDay = 24 * 60 * 60 * 1000;
                searchCriteriaLuxury.nights = Math.round(Math.abs((luxurySelectedCheckout - luxurySelectedCheckin) / oneDay));
                if(luxuryCheckinDateInput) luxuryCheckinDateInput.value = searchCriteriaLuxury.checkin;
                if(luxuryCheckoutDateInput) luxuryCheckoutDateInput.value = searchCriteriaLuxury.checkout;
                if(luxuryDatePickerModal) luxuryDatePickerModal.style.display = 'none';
            } else { alert('Please select a valid check-in and check-out date.'); }
        });

        if (luxuryBookingForm) {
            luxuryBookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                searchCriteriaLuxury.checkin = luxuryCheckinDateInput.value;
                searchCriteriaLuxury.checkout = luxuryCheckoutDateInput.value;
                searchCriteriaLuxury.guests = parseInt(document.getElementById('guests-luxury').value);
                if (!searchCriteriaLuxury.checkin || !searchCriteriaLuxury.checkout) { alert('Please select your dates.'); return; }
                if (new Date(searchCriteriaLuxury.checkout) <= new Date(searchCriteriaLuxury.checkin)) { alert('Departure date must be after arrival date.'); return; }
                const oneDay = 24 * 60 * 60 * 1000;
                searchCriteriaLuxury.nights = Math.round(Math.abs((new Date(searchCriteriaLuxury.checkout) - new Date(searchCriteriaLuxury.checkin)) / oneDay));
                document.getElementById('search-dates-info-luxury').textContent = `Showing availability from ${formatDateLuxury(searchCriteriaLuxury.checkin)} to ${formatDateLuxury(searchCriteriaLuxury.checkout)} for ${searchCriteriaLuxury.guests} guest(s).`;
                populateLuxuryRoomListings();
                showPageLuxury('roomsList-luxury');
            });
        }
        function formatDateLuxury(dateString, locale = 'en-US') {
            if (!dateString) return 'N/A';
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(locale, options);
        }
        
        function populateLuxuryRoomListings() {
            const container = document.getElementById('available-rooms-container-luxury');
            const noRoomsMsg = document.getElementById('no-rooms-message-luxury');
            if (!container || !noRoomsMsg) return;
            container.innerHTML = '';
            let roomsFound = false;
            mockRoumeiRoomsData.forEach(room => {
                if (room.guests >= searchCriteriaLuxury.guests) {
                    roomsFound = true;
                    const totalPrice = room.price * searchCriteriaLuxury.nights;
                    const card = `
                        <div class="room-list-item-luxury mb-6">
                            <div class="room-image-container">
                                <img src="${room.image}" alt="${translations[currentLanguage]['room_id_' + room.id + '_alt'] || room.name}">
                            </div>
                            <div class="room-content">
                                <div class="room-details">
                                    <h3 class="font-serif-display text-2xl mb-2 text-white">${translations[currentLanguage]['room_id_' + room.id + '_name'] || room.name}</h3>
                                    <p class="text-sm text-text-secondary-light mb-1">${translations[currentLanguage].max_guests || 'Max Guests'}: ${room.guests} • ${translations[currentLanguage].bed_type || 'Bed'}: ${translations[currentLanguage]['room_id_' + room.id + '_bed_type'] || room.bed}</p>
                                    <p class="text-sm text-text-secondary-light mb-3">${(translations[currentLanguage]['room_id_' + room.id + '_description_short'] || room.description).substring(0,120)}...</p>
                                    <ul class="text-xs text-text-secondary-light list-disc list-inside mb-3">
                                        ${room.amenities.slice(0,3).map(a => `<li>${translations[currentLanguage]['amenity_' + a.toLowerCase().replace(/ /g, '_')] || a}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="room-actions">
                                    <p class="text-xl font-bold text-white mb-2">NT$ ${room.price.toLocaleString()} <span class="text-xs font-normal text-text-secondary-light">/ ${translations[currentLanguage].per_night || 'night'}</span></p>
                                    <p class="text-sm text-text-secondary-light mb-3">${translations[currentLanguage].total_price || 'Total'}: NT$ ${totalPrice.toLocaleString()} ${translations[currentLanguage].for_nights_before || 'for'} ${searchCriteriaLuxury.nights} ${searchCriteriaLuxury.nights > 1 ? (translations[currentLanguage].nights_plural || 'nights') : (translations[currentLanguage].night_singular || 'night')}</p>
                                    <button onclick="showRoomDetailLuxury('${room.id}')" class="btn-secondary-luxury w-full sm:w-auto text-sm" data-translate-key="rooms_list_details_reserve">${translations[currentLanguage].rooms_list_details_reserve || translations['en'].rooms_list_details_reserve}</button>
                                </div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += card;
                }
            });
            noRoomsMsg.style.display = roomsFound ? 'none' : 'block';
        }

        function showRoomDetailLuxury(roomId) {
            selectedRoomForCheckoutLuxury = mockRoumeiRoomsData.find(r => r.id === roomId); 
            if (!selectedRoomForCheckoutLuxury) return;

            const roomNameKey = 'room_id_' + selectedRoomForCheckoutLuxury.id + '_name';
            const roomDescriptionKey = 'room_id_' + selectedRoomForCheckoutLuxury.id + '_description_full'; // Assuming a more detailed description key
            const roomBedKey = 'room_id_' + selectedRoomForCheckoutLuxury.id + '_bed_type';

            document.getElementById('room-detail-name-luxury').textContent = translations[currentLanguage][roomNameKey] || selectedRoomForCheckoutLuxury.name;
            document.getElementById('room-detail-image-luxury').src = selectedRoomForCheckoutLuxury.image;
            document.getElementById('room-detail-image-luxury').alt = translations[currentLanguage]['room_id_' + selectedRoomForCheckoutLuxury.id + '_alt'] || selectedRoomForCheckoutLuxury.name;
            document.getElementById('room-detail-description-luxury').textContent = translations[currentLanguage][roomDescriptionKey] || selectedRoomForCheckoutLuxury.description;
            
            const amenitiesList = document.getElementById('room-detail-amenities-luxury');
            amenitiesList.innerHTML = '';
            selectedRoomForCheckoutLuxury.amenities.forEach(amenity => {
                const amenityKey = 'amenity_' + amenity.toLowerCase().replace(/ /g, '_');
                const li = document.createElement('li'); 
                li.textContent = translations[currentLanguage][amenityKey] || amenity; 
                amenitiesList.appendChild(li);
            });
            document.getElementById('room-detail-guests-luxury').textContent = selectedRoomForCheckoutLuxury.guests; // Assuming guests number is not translated
            document.getElementById('room-detail-bed-luxury').textContent = translations[currentLanguage][roomBedKey] || selectedRoomForCheckoutLuxury.bed;
            document.getElementById('room-detail-price-luxury').textContent = selectedRoomForCheckoutLuxury.price.toLocaleString();
            
            let datesText;
            const nights = searchCriteriaLuxury.nights;
            const nightText = nights > 1 ? (translations[currentLanguage].nights_plural || 'nights') : (translations[currentLanguage].night_singular || 'night');
            if (currentLanguage === 'zh-TW') {
                datesText = `${formatDateLuxury(searchCriteriaLuxury.checkin, 'zh-TW')} - ${formatDateLuxury(searchCriteriaLuxury.checkout, 'zh-TW')} (${nights} ${nightText})`;
            } else {
                datesText = `${formatDateLuxury(searchCriteriaLuxury.checkin, 'en-US')} - ${formatDateLuxury(searchCriteriaLuxury.checkout, 'en-US')} (${nights} ${nightText})`;
            }
            document.getElementById('room-detail-dates-luxury').textContent = datesText;
            
            // Ensure button text is also translated if it was missed by a general data-translate-key
            const reserveButton = document.querySelector('#roomDetail-luxury .btn-primary-luxury');
            if(reserveButton) reserveButton.textContent = translations[currentLanguage].room_detail_reserve_this_room || translations['en'].room_detail_reserve_this_room;

            const backButton = document.querySelector('#roomDetail-luxury .btn-secondary-luxury');
             if(backButton) {
                const icon = '<i class="fas fa-arrow-left mr-2"></i>';
                backButton.innerHTML = icon + (translations[currentLanguage].room_detail_back_to_rooms || translations['en'].room_detail_back_to_rooms);
            }

            showPageLuxury('roomDetail-luxury');
        }
        function goBackToRoomsLuxury() { showPageLuxury('roomsList-luxury'); }
        function goBackToRoomDetailLuxury() { 
            if(selectedRoomForCheckoutLuxury) showRoomDetailLuxury(selectedRoomForCheckoutLuxury.id);
            else showPageLuxury('roomsList-luxury');
        }
        function proceedToBookingFormLuxury() {
            if (!selectedRoomForCheckoutLuxury || !searchCriteriaLuxury.checkin) { alert("Please select a room and dates first."); showPageLuxury('home-luxury'); return; }
            const totalPrice = selectedRoomForCheckoutLuxury.price * searchCriteriaLuxury.nights;
            document.getElementById('summary-room-name-luxury').textContent = selectedRoomForCheckoutLuxury.name;
            document.getElementById('summary-dates-luxury').textContent = `${formatDateLuxury(searchCriteriaLuxury.checkin)} - ${formatDateLuxury(searchCriteriaLuxury.checkout)} (${searchCriteriaLuxury.nights} night${searchCriteriaLuxury.nights > 1 ? 's' : ''})`;
            document.getElementById('summary-guests-luxury').textContent = `${searchCriteriaLuxury.guests} Guest(s)`;
            document.getElementById('summary-total-price-luxury').textContent = `NT$ ${totalPrice.toLocaleString()}`;
            showPageLuxury('bookingForm-luxury');
        }
        const luxuryGuestDetailsForm = document.getElementById('guest-details-form-luxury');
        const luxuryConfirmBookingBtn = document.getElementById('confirm-booking-luxury-btn');
        const luxuryAcceptPolicyCheckbox = document.getElementById('accept-policy-luxury');
        function checkLuxuryFormValidity() {
            if(luxuryGuestDetailsForm && luxuryAcceptPolicyCheckbox && luxuryConfirmBookingBtn){
                const isFormValid = luxuryGuestDetailsForm.checkValidity(); 
                luxuryConfirmBookingBtn.disabled = !(isFormValid && luxuryAcceptPolicyCheckbox.checked);
            }
        }
        if(luxuryGuestDetailsForm) luxuryGuestDetailsForm.addEventListener('input', checkLuxuryFormValidity);
        if(luxuryAcceptPolicyCheckbox) luxuryAcceptPolicyCheckbox.addEventListener('change', checkLuxuryFormValidity);
        if (luxuryGuestDetailsForm) {
            luxuryGuestDetailsForm.addEventListener('submit', (e) => {
                e.preventDefault(); if (luxuryConfirmBookingBtn.disabled) return;
                document.getElementById('conf-guest-name-luxury').textContent = document.getElementById('first-name-luxury').value;
                document.getElementById('conf-guest-email-luxury').textContent = document.getElementById('email-luxury').value;
                document.getElementById('conf-booking-id-luxury').textContent = 'ROUMEI' + Math.floor(Math.random() * 90000 + 10000);
                document.getElementById('conf-room-name-luxury').textContent = selectedRoomForCheckoutLuxury.name;
                document.getElementById('conf-dates-luxury').textContent = `${formatDateLuxury(searchCriteriaLuxury.checkin)} - ${formatDateLuxury(searchCriteriaLuxury.checkout)}`;
                document.getElementById('conf-total-price-luxury').textContent = `NT$ ${(selectedRoomForCheckoutLuxury.price * searchCriteriaLuxury.nights).toLocaleString()}`;
                if(luxuryConfirmationModal) luxuryConfirmationModal.style.display = 'flex';
            });
        }
        function closeConfirmationModalLuxury() { if(luxuryConfirmationModal) luxuryConfirmationModal.style.display = 'none'; }
        function closeConfirmationModalAndResetLuxury() {
            closeConfirmationModalLuxury();
            if(luxuryBookingForm) luxuryBookingForm.reset(); if(luxuryGuestDetailsForm) luxuryGuestDetailsForm.reset();
            if(luxuryAcceptPolicyCheckbox) luxuryAcceptPolicyCheckbox.checked = false; if(luxuryConfirmBookingBtn) luxuryConfirmBookingBtn.disabled = true;
            scrollToSectionLuxury('home-luxury-hero'); 
        }

        // Language and Currency Selector Mock Logic
        const langBtn = document.getElementById('language-selector-btn');
        const langDropdown = document.getElementById('language-dropdown');
        const currentLangDisplay = document.getElementById('current-language-display');
        if(langBtn && langDropdown) {
            langBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
                if(currencyDropdown) currencyDropdown.style.display = 'none';
            });
            langDropdown.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const selectedLang = e.target.dataset.lang;
                    setLanguage(selectedLang);
                    langDropdown.style.display = 'none';
                    // alert(`Language changed to: ${e.target.textContent} (Prototype - no actual translation)`); // Remove alert
                });
            });
        }

        const currBtn = document.getElementById('currency-selector-btn');
        const currencyDropdown = document.getElementById('currency-dropdown');
        const currentCurrDisplay = document.getElementById('current-currency-display');
        if(currBtn && currencyDropdown) {
            currBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currencyDropdown.style.display = currencyDropdown.style.display === 'block' ? 'none' : 'block';
                if(langDropdown) langDropdown.style.display = 'none';
            });
            currencyDropdown.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    if(currentCurrDisplay) currentCurrDisplay.textContent = e.target.dataset.curr;
                    currencyDropdown.style.display = 'none';
                    alert(`Currency changed to: ${e.target.dataset.curr} (Prototype - no actual conversion)`);
                });
            });
        }
        window.addEventListener('click', () => {
            if(langDropdown) langDropdown.style.display = 'none';
            if(currencyDropdown) currencyDropdown.style.display = 'none';
        });


        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('currentYearLuxury').textContent = new Date().getFullYear();
            const today = new Date(); const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1);
            if(luxuryCheckinDateInput) luxuryCheckinDateInput.value = today.toISOString().split('T')[0];
            if(luxuryCheckoutDateInput) luxuryCheckoutDateInput.value = tomorrow.toISOString().split('T')[0];
            searchCriteriaLuxury.checkin = luxuryCheckinDateInput.value;
            searchCriteriaLuxury.checkout = luxuryCheckoutDateInput.value;
            searchCriteriaLuxury.nights = 1;

            setLanguage(currentLanguage); // Apply initial language

            if (heroBgLuxuryElement && heroLuxuryImages.length > 0) { 
                heroBgLuxuryElement.style.backgroundImage = `url('${heroLuxuryImages[0]}')`;
                setInterval(rotateHeroLuxuryImages, 5000); 
            }
            showPageLuxury('home-luxury'); 
        }); 