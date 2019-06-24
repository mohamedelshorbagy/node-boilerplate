package <%= appId %>.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import <%= appId %>.R;
import <%= appId %>.model.<%= Model %>;

import java.util.ArrayList;

public class <%= Model %>RVAdapter extends RecyclerView.Adapter<<%= Model %>RVAdapter.ViewHolder> {

    Context context;
    ArrayList<<%= Model %>> <%= model %>ArrayList;

    public <%= Model %>RVAdapter(Context context, ArrayList<<%= Model %>> <%= model %>ArrayList){
        this.context = context;
        this.<%= model %>ArrayList = <%= model %>ArrayList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.<%= model %>_item, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull final ViewHolder holder, int position) {


        final <%= Model %> <%= model %> = <%= model %>ArrayList.get(position);

        holder.id.setText(<%= model %>.id);

    }

    @Override
    public int getItemCount() {
        return <%= model %>ArrayList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        TextView id;

        public ViewHolder(View itemView) {
            super(itemView);

            id = itemView.findViewById(R.id.id);
        }
    }
}
