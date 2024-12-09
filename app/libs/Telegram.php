<?php

class Telegram {

    protected $token;
    protected $url;

    public function __construct($token) {        
      $this->token = $token;
      $this->url = "https://api.telegram.org/bot$token/";
    }

    public function sendMessage($message, $chatId) {
      $url = $this->url."sendMessage?chat_id=$chatId&text="
      .urlencode($message). "&parse_mode=HTML";
    
      return file_get_contents($url);
    }

    
    public function sendSuperMessage($message, $chatId, $buttons) {
      $getQuery = array(
        "chat_id" 	=> $chatId,
        "text"  	  => $message,
        "parse_mode" => "html",
        'reply_markup' => json_encode($buttons),
        'disable_web_page_preview' => true
      );
      $ch = curl_init($this->url ."sendMessage?" . http_build_query($getQuery));
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_HEADER, false);
      $resultQuery = curl_exec($ch);
      curl_close($ch);

      return $resultQuery;
    }


    public function checkSubscribe($channel, $chatId) {
      $chatMemberStatus = json_decode(file_get_contents($this->url . "getChatMember?chat_id=$channel&user_id=$chatId"), true);

      if ($chatMemberStatus['ok'] && 
            ($chatMemberStatus['result']['status'] === 'member' || 
            $chatMemberStatus['result']['status'] === 'administrator' || 
            $chatMemberStatus['result']['status'] === 'creator')) {
              return true;
      } return false;
    }
}
