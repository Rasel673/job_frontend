<template lang="">
  <div>
    <!-- footer -->
    <footer>
      <div class="container-fluid mt-3">
        <div class="row py-5">
          <div class="col-md-2"></div>

          <div class="col-md-8">
            <div class="input-group mb-4">
              <div class="col-md-3"></div>
              <input
                type="text"
                class="form-control subscribe"
                placeholder="Enter your Email"
                aria-label="Enter your Email"
                aria-describedby="button-addon2"
              />
              <button class="btn btn-light" type="button" id="button-addon2">
                <b>Subscribe</b>
              </button>
              <div class="col-md-3"></div>
            </div>

            <ul class="nav justify-content-center border-bottom my-2">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#"
                  ><h5>About</h5></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#"
                  ><h5>Contact Us</h5></a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#"
                  ><h5>Privacy & Policy</h5></a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#"
                  ><h5>Terms and Condition</h5></a
                >
              </li>
            </ul>

            <p class="text-center text-white">
              © 2024. All rights reserved by Sarkar IT
            </p>
          </div>

          <div class="col-md-2"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.subscribe {
  background: transparent;
  color: white;
}
</style>
