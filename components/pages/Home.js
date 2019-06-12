export default function(state){
    return `<body>
    <h1>Two<span>Flower</span></h1>
    <p></p>
    <h2>better than a bouquet.</h2>

    <nav>
        <div class="dropdown">
            <button class="dropbtn">Menu</button>
            <div class="dropdown-content">
                <a href="#">What we do</a>
                <a href="#">How this works</a>
                <a href="#">FAQ</a>
            </div>
        </div>
    </nav>


    <form action="action_page.php">
        <div class="imgcontainer">
            <img src="https://i.imgur.com/FsvLRFv.png" alt="Avatar" class="avatar" />
        </div>
        <p>
            Losing someone close can be one of the most difficult times in a family’s life. And just like life, the cost of a funeral goes way beyond a few flowers and a plot of land. There’s travel expenses, funeral costs, and time and money spent away from work.
            Those costs add up. I created TwoFlower to easily help those in a great time of need, where asking for assistance is the last thing in mind. TwoFlower is a way for the friends of bereaved parties to show that they care, in a functional way.
        </p>

        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label for="phone"><b>Phone</b></label>
            <input type="text" placeholder="Enter phone number" name="phone" required />

            <label for="uemail"><b>Email</b></label>
            <input type="text" placeholder="Email Address" name="uemail" required />

            <button type="submit">Login</button>
            <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>

            <button type=" button " class="cancelbtn ">Cancel</button>
            <span class="psw ">Forgot <a href="# ">password?</a></span>
        </div>
        </div>
    </form>`;
}