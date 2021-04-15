<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use App\Planilla;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use SebastianBergmann\Environment\Console;

class OrderStatusChangedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $planilla;

    public function __construct(Planilla $planilla)
    {
        $this->planilla=$planilla;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('imeco-realtime');
    }

    public function broadcastWith()
    {

        $extra=[
               'name'=>$this->planilla->estado,
               'percent'=> 100,
            ];

        return array_merge($this->planilla->toArray(),$extra);
        
    }


}
