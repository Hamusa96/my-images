<script>
  videojs.getPlayer("myPlayerID").ready(function() {
    var myPlayer = this,
        controlBar = myPlayer.controlBar,
        CustomButton = videojs.getComponent('Button'),
        toggleIframeButton;

    // Define a new button component
    var ToggleIframeButton = videojs.extend(CustomButton, {
      constructor: function() {
        CustomButton.apply(this, arguments);
        /* Initialize your button here */
        this.addClass('vjs-icon-cog'); // Example class, change to suit your needs
        this.controlText("Toggle Iframe");
      },
      handleClick: function() {
        // Toggle iframe visibility
        var iframe = document.getElementById('myIframe');
        if (iframe.style.display === 'none' || iframe.style.display === '') {
          iframe.style.display = 'block';
        } else {
          iframe.style.display = 'none';
        }
      }
    });

    // Register the new component
    videojs.registerComponent('ToggleIframeButton', ToggleIframeButton);

    // Add the new component to the control bar
    toggleIframeButton = controlBar.addChild('ToggleIframeButton', {});
    controlBar.el().insertBefore(toggleIframeButton.el(), controlBar.getChild('fullscreenToggle').el());

    // Adjust the CSS as needed to position your button or change its appearance
  });
</script>
