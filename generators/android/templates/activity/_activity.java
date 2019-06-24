package <%= appId %>.activity;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.content.FileProvider;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.Toast;

import java.util.ArrayList;

import static android.content.Context.MODE_PRIVATE;


import <%= appId %>.R;
import <%= appId %>.adapter.<%= Model %>RVAdapter;
import <%= appId %>.model.<%= Model %>;

public class <%= Model %>Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    <%= Model %>RVAdapter <%= model %>RVAdapter;

    ArrayList<<%= Model %>> <%= model %>ArrayList= new ArrayList<>();

   @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.<%= model %>_activity);


        recyclerView.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false));
        <%= model %>RVAdapter = new <%= Model %>RVAdapter(this, <%= model %>ArrayList);
        recyclerView.setAdapter(<%= model %>RVAdapter);
    }   

}
