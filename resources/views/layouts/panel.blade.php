<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TILEVU</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="../assets/vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- Plugin css for this page -->
  <link rel="stylesheet" href="../assets/vendors/flag-icon-css/css/flag-icon.min.css">
  <link rel="stylesheet" href="../assets/vendors/jvectormap/jquery-jvectormap.css">
  <!-- End plugin css for this page -->
  <!-- Layout styles -->
  <link rel="stylesheet" href="../assets/css/demo/style.css">
  <!-- End layout styles -->
  <link rel="shortcut icon" href="../assets/images/favicon.png" />

  <script src="../assets/js/jquery-3.7.1.min.js"></script>

</head>
<body>
<script src="../assets/js/preloader.js"></script>
  <div class="body-wrapper">
    <!-- partial:partials/_sidebar.html -->
    <x-side-bar>
    </x-side-bar>
    <!-- partial -->
    <div class="main-wrapper mdc-drawer-app-content">
      <!-- partial:partials/_navbar.html -->
      <x-top-bar>
      </x-top-bar>
      <!-- partial -->
      <div class="page-wrapper mdc-toolbar-fixed-adjust">
        @yield('content')
        <!-- partial:partials/_footer.html -->
       <x-footer>
       </x-footer>
        <!-- partial -->
      </div>
    </div>
  </div>
  <!-- plugins:js -->
  <script src="../assets/vendors/js/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <script src="../assets/vendors/chartjs/Chart.min.js"></script>
  <script src="../assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
  <script src="../assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="../assets/js/material.js"></script>
  <script src="../assets/js/misc.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="../assets/js/dashboard.js"></script>
  <!-- End custom js for this page-->
</body>
</html>
