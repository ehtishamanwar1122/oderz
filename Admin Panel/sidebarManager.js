class SpecialHeader extends HTMLElement{
    ConnectedCallback(){
        this.innerHTML =
        <><div class="top-bar">
                <a href="#">Switch to Old Biz <span>Click here</span></a>
            </div><header class="sticky-header">
                    <div class="header-content">
                        <div class="logo">
                            <img src="./ordrx.PNG" alt="ORDRZ Logo">
                            </></div>

                        <div class="nav-toggle">
                            <i class="fas fa-bars"></i>
                        </div>

                        <div class="calendar-branch">
                            <div class="calendar">
                                <span>Aug 11 2024 - Aug 13 2024</span>
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <div class="branch">
                                Branch: <span>,, Islamabad</span>
                            </div>
                        </div>

                        <div class="view-website">
                            <a href="#">View Website</a>
                            <i class="fas fa-cog"></i>
                        </div>
                    </div>
                </header><div class="sidebar">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="#">Dashboard</a></li>
                        <li class="nav-item">
                            <a href="#" class="dropdown-btn">Orders <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-container">
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Abandoned Carts</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="dropdown-btn">Products <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-container">
                                <li><a href="#">items</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Setup</a></li>
                                <li><a href="#">Photos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="dropdown-btn">Campaigns <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-container">
                                <li><a href="#">Loyalty</a></li>
                                <li><a href="#">Coupons</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="dropdown-btn">Performance <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-container">
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Loyalty</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Customers</a></li>
                                <li><a href="#">Custom Reports</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="#">Customers</a></li>
                        <li class="nav-item"><a href="#">Reservations</a></li>
                        <li class="nav-item">
                            <a href="#" class="dropdown-btn">Website <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-container">
                                <li><a href="#">Display</a></li>
                                <li><a href="#">SEO</a></li>
                                <li><a href="#">Static Pages</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="dropdown-btn">POS <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-container">
                                <li><a href="#">Reports</a></li>
                                <li><a href="#">Staff Attend</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="#">Plans & Billing</a></li>
                        <li class="nav-item"><a href="#">Settings</a></li>
                        <li class="nav-item"><a href="#">Partner App Download</a></li>
                    </ul>
                </div>
                </>
    }
}
customElements.define("Special-eader",SpecialHeader);