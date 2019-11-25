package com.famcam;
import android.os.Bundle;
import android.widget.LinearLayout;
import android.view.Gravity;
import com.facebook.react.ReactActivity;
// import com.reactnativenavigation.controllers.SplashActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.reactnativenavigation.NavigationActivity;
import android.content.Intent;

public class MainActivity extends NavigationActivity {
    @Override
  protected void onCreate(Bundle savedInstanceState) {
     SplashScreen.show(this); 
      super.onCreate(savedInstanceState);
  //  LinearLayout view = new LinearLayout(this);

  //      view.setBackgroundResource(R.drawable.launch_screen);
  //      view.setGravity(Gravity.CENTER);
  //      return view;
    
  }
  //  @Override
  //  public LinearLayout createSplashLayout() {
  //      LinearLayout view = new LinearLayout(this);

  //      view.setBackgroundResource(R.drawable.launch_screen);
  //      view.setGravity(Gravity.CENTER);
  //      return view;
  //  }

 }
