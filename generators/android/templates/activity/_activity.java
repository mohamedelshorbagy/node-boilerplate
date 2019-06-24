package <%= appId %>.activity;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
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
