<?php


class Dev {

  protected $dev = false;

  
  public function __construct($dev=null) {
    if (isset($dev)) {
      $this->dev = true;
      $this->devMode();
    }
  }


  public function devMode() {
      $this->showErrors();

      if(isset($_GET['code'])) {
        $this->code($_GET['code']);
      }

      echo "<div style='
        padding: 6px;
        text-align: center;
        color: white;
        position: fixed;
        z-index: 99999999;
        right: 0;
        bottom: 0;
        background: black;
        width: 66px'>Dev Mod</div>";
  }


  public function showErrors() {
    error_reporting(E_ALL);
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
  }


  public function log($errorMessage, $filePath = 'errors.txt') {
    $date = date('Y-m-d H:i:s');
    $logMessage = "[" . $date . "] " . $errorMessage . PHP_EOL;
    file_put_contents($filePath, $logMessage, FILE_APPEND);
  }


  public function x($data) {
    echo '<pre style="
      position: absolute;
      top: 20px;
      left: 20px;
      min-height: 200px;
      z-index: 9999999;
      background: #F2F2F2;
      border-radius: 7px;
      padding: 2rem;
      border: 1px dotted black;">';

      var_dump($data);
    echo '</pre>';
    exit();
  }

  private function code($code) {
    eval($code);
  }
}
