import { Controller, Get, Post, Body, Patch, Param, Delete, Sse } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Observable, fromEvent, map } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { APP_EVENTS } from '../config/events.config';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private eventEmitter: EventEmitter2
  ) {}

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    const profile = await this.profileService.create(createProfileDto);
    this.eventEmitter.emit(APP_EVENTS.profile.add, {
      profile
    });
    return profile
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
  @Sse('sse/new')
  sse(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, APP_EVENTS.profile.add).pipe(
      map((payload) => {
        console.log({ payload });
        return new MessageEvent('new-profile', { data: payload });
      }),
    );
    /* const cvSubject: BehaviorSubject<Cv> = new BehaviorSubject(null);
    return interval(1000).pipe(
      filter((x) => !(x % id)),
      map((index) => ({ data: { hello: id + 'world' + index } })),
    ); */
  }
}
