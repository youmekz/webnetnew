    <div class="messangers">
      <a href="<?=$wa;?>" target="_blank">
        <img src="./assets/imgs/icons/whatsapp.png" alt="whatsapp icon">
      </a>
      <a href="<?=$telegram;?>" target="_blank">
        <img src="./assets/imgs/icons/telegram.png" alt="telegram icon" class="telegram-icon">
      </a>
      <a href="<?=$phoneLink;?>">
        <img src="./assets/imgs/icons/telegram.png" alt="phone icon" class="phone-icon">
      </a>
    </div>
    
    <footer>
      <div class="contacts">
        <a href="tel:<?=$phoneLink;?>" class="promo-phone"><b><?=$phone;?></b></a>
      </div>
      <div class="copyright">
        <a href="<?=$site;?>"><?=$site;?> <sup>©</sub><?=date('Y');?></a>
      </div>
    </footer>
  

  <script type="module" src="./assets/js/cursor.js"></script>

  <script src="./assets/js/main.js"></script>
  <script>
			if ('serviceWorker' in navigator) {
				// window.addEventListener('load', function() {
				// 	navigator.serviceWorker.register('./sw.js')
				// 	.then(function(registration) {
				// 	})
				// 	.catch(function(error) {
				// 	});
				// });
			}
		</script>
	</body>
</html>